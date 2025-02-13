import { useState, useEffect } from 'react';

const CACHE_KEY = 'players_data';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export const usePlayersData = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        // Check cache first
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = Date.now() - timestamp > CACHE_DURATION;
          
          if (!isExpired) {
            setPlayers(data);
            return;
          }
        }

        // If no cache or expired, fetch from API
        const response = await fetch('https://aqonmysuziypdtejgqsd.supabase.co/rest/v1/Player?select=*', {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxb25teXN1eml5cGR0ZWpncXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NDkyOTcsImV4cCI6MjA1NTAyNTI5N30.YN417f5DfJcMSXFxrZApJ7QHWunqLZxw2tpN6lP36VQ'
          }
        });
        const data = await response.json();
        
        // Define position order
        const positionOrder = {
          'Guarda-Redes': 1,
          'Defesa': 2,
          'Médio': 3,
          'Avançado': 4
        };

        // Sort data by position
        const sortedData = data.sort((a, b) => {
          return positionOrder[a.position_label] - positionOrder[b.position_label];
        });

        // Transform API data
        const transformedPlayers = sortedData.map(player => ({
          id: player.id,
          name: player.name,
          number: player.id,
          position: player.position_label,
          nationality: player.nacionality,
          appearances: player.games_played,
          goals: player.scored_goals,
          assists: 0,
          image: "/player-placeholder.svg",
          flagCode: player.flag_code
        }));

        // Update cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: transformedPlayers,
          timestamp: Date.now()
        }));

        setPlayers(transformedPlayers);
      } catch (error) {
        console.error('Error fetching players:', error);
        
        // If fetch fails, try to use cached data even if expired
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { data } = JSON.parse(cachedData);
          setPlayers(data);
        }
      }
    };

    fetchPlayers();
  }, []);

  return players;
};
