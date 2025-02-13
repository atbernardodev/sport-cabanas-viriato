import { Container, Box, Grid } from '@mui/material';
import PageTemplate from '../components/PageTemplate';
import PlayerCard from '../components/PlayerCard';
import TechnicalTeam from '../components/TechnicalTeam';

// Combine all players into a single array
const players = [
  // Goalkeepers
  {
    id: 1,
    name: "João Silva",
    number: 1,
    position: "Guarda-Redes",
    age: 25,
    height: 188,
    weight: 82,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  {
    id: 2,
    name: "Miguel Santos",
    number: 12,
    position: "Guarda-Redes",
    age: 22,
    height: 185,
    weight: 80,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  // Defenders
  {
    id: 3,
    name: "Pedro Santos",
    number: 4,
    position: "Defesa",
    age: 23,
    height: 182,
    weight: 75,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  {
    id: 4,
    name: "António Ferreira",
    number: 2,
    position: "Defesa",
    age: 28,
    height: 185,
    weight: 78,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  {
    id: 5,
    name: "Rui Costa",
    number: 3,
    position: "Defesa",
    age: 24,
    height: 183,
    weight: 76,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  {
    id: 6,
    name: "Carlos Oliveira",
    number: 5,
    position: "Defesa",
    age: 26,
    height: 184,
    weight: 77,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  // Midfielders
  {
    id: 7,
    name: "Miguel Costa",
    number: 10,
    position: "Médio",
    age: 28,
    height: 175,
    weight: 70,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  {
    id: 8,
    name: "Diogo Martins",
    number: 8,
    position: "Médio",
    age: 25,
    height: 178,
    weight: 72,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  {
    id: 9,
    name: "José Rodrigues",
    number: 6,
    position: "Médio",
    age: 27,
    height: 176,
    weight: 71,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  {
    id: 10,
    name: "Paulo Sousa",
    number: 15,
    position: "Médio",
    age: 24,
    height: 177,
    weight: 70,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  // Forwards
  {
    id: 11,
    name: "André Martins",
    number: 9,
    position: "Avançado",
    age: 22,
    height: 180,
    weight: 73,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  {
    id: 12,
    name: "Ricardo Silva",
    number: 7,
    position: "Avançado",
    age: 23,
    height: 179,
    weight: 72,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  },
  {
    id: 13,
    name: "Bruno Santos",
    number: 11,
    position: "Avançado",
    age: 21,
    height: 178,
    weight: 71,
    image: "/player-placeholder.svg",
    nationality: 'Portugal',
    appearances: 15,
    goals: 0,
    assists: 0,
  }
];

function Teams() {
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
                <PlayerCard player={player} />
              </Grid>
            ))}
          </Grid>
          {/* Technical Team Section */}
          <TechnicalTeam />
        </Container>
      </Box>
    </PageTemplate>
  );
}

export default Teams;
