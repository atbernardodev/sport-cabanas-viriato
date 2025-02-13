import { Container, Box, Grid } from '@mui/material';
import PageTemplate from '../components/PageTemplate';
import PlayerCard from '../components/PlayerCard';
import TechnicalTeam from '../components/TechnicalTeam';
import { usePlayersData } from '../hooks/usePlayersData';

const Teams = () => {
  const players = usePlayersData();

  return (
    <PageTemplate>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
          pt: 4,
          pb: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {/* Players Section */}
            {players.map((player) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={player.id}>
                <PlayerCard 
                  name={player.name}
                  position={player.position}
                  nationality={player.nationality}
                  flagCode={player.flagCode}
                  appearances={player.appearances}
                  goals={player.goals}
                  assists={player.assists}
                  number={player.number}
                  image={player.image}
                />
              </Grid>
            ))}
          </Grid>
          {/* Technical Team Section */}
          <TechnicalTeam />
        </Container>
      </Box>
    </PageTemplate>
  );
};

export default Teams;
