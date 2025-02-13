import { Container, Typography, Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import PageTemplate from '../components/PageTemplate';
import MatchCard from '../components/MatchCard';
import StandingsCard from '../components/StandingsCard';
import LeagueTable from '../components/LeagueTable';

// Sample match data
const sampleMatches = [
  {
    id: 1,
    date: '10 Fev 2025',
    competition: 'Liga Portugal',
    homeTeam: 'Sport Clube Vianense',
    awayTeam: 'FC Porto B',
    homeScore: 2,
    awayScore: 1,
    venue: 'Estádio Dr. José de Matos',
    homeTeamLogo: '/images/logo.png',
    awayTeamLogo: '/images/porto.png',
  },
  {
    id: 2,
    date: '03 Fev 2025',
    competition: 'Liga Portugal',
    homeTeam: 'Braga B',
    awayTeam: 'Sport Clube Vianense',
    homeScore: 1,
    awayScore: 1,
    venue: 'Estádio 1º de Maio',
    homeTeamLogo: '/images/braga.png',
    awayTeamLogo: '/images/logo.png',
  },
  {
    id: 3,
    date: '27 Jan 2025',
    competition: 'Liga Portugal',
    homeTeam: 'Sport Clube Vianense',
    awayTeam: 'Vitória SC B',
    homeScore: 3,
    awayScore: 0,
    venue: 'Estádio Dr. José de Matos',
    homeTeamLogo: '/images/logo.png',
    awayTeamLogo: '/images/vitoria.png',
  },
];

const upcomingMatches = [
  {
    id: 4,
    date: '17 Fev 2025',
    competition: 'Liga Portugal',
    homeTeam: 'Feirense',
    awayTeam: 'Sport Clube Vianense',
    homeScore: '-',
    awayScore: '-',
    venue: 'Estádio Marcolino de Castro',
    homeTeamLogo: '/images/feirense.png',
    awayTeamLogo: '/images/logo.png',
  },
  {
    id: 5,
    date: '24 Fev 2025',
    competition: 'Liga Portugal',
    homeTeam: 'Sport Clube Vianense',
    awayTeam: 'Leixões',
    homeScore: '-',
    awayScore: '-',
    venue: 'Estádio Dr. José de Matos',
    homeTeamLogo: '/images/logo.png',
    awayTeamLogo: '/images/leixoes.png',
  },
];

function Matches() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <PageTemplate>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
          pt: 2,
          pb: 8,
        }}
      >
        <Container maxWidth="xl">
          {/* Standings Card */}
          <StandingsCard />

          <Grid container spacing={3}>
            {/* Next Matches Section */}
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  backgroundColor: 'rgba(33,150,243,0.05)',
                  borderRadius: '16px',
                  p: 2,
                  height: '100%',
                  border: '1px solid rgba(33,150,243,0.1)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#2196F3',
                    fontWeight: 'bold',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&::before': {
                      content: '""',
                      width: '3px',
                      height: '20px',
                      backgroundColor: '#2196F3',
                      borderRadius: '2px',
                    },
                  }}
                >
                  Próximos Jogos
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {upcomingMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Previous Matches Section */}
            <Grid item xs={12} lg={8}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderRadius: '16px',
                  p: 2,
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&::before': {
                      content: '""',
                      width: '3px',
                      height: '20px',
                      backgroundColor: 'white',
                      borderRadius: '2px',
                    },
                  }}
                >
                  Últimos Resultados
                </Typography>
                <Grid container spacing={2}>
                  {sampleMatches.map((match) => (
                    <Grid item xs={12} md={isLargeScreen ? 6 : 12} key={match.id}>
                      <MatchCard match={match} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>

          {/* League Table Section */}
          <LeagueTable />
        </Container>
      </Box>
    </PageTemplate>
  );
}

export default Matches;
