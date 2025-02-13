import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const recentResults = [
  {
    date: '2024-02-05',
    homeTeam: 'SCVB',
    awayTeam: 'FC Oliveira',
    homeScore: 2,
    awayScore: 1,
    competition: 'Campeonato Distrital',
  },
  {
    date: '2024-01-28',
    homeTeam: 'SC Viseu',
    awayTeam: 'SCVB',
    homeScore: 0,
    awayScore: 3,
    competition: 'Campeonato Distrital',
  },
];

const upcomingMatches = [
  {
    date: '2024-02-18',
    homeTeam: 'SCVB',
    awayTeam: 'GD Tarouca',
    time: '15:00',
    competition: 'Campeonato Distrital',
  },
  {
    date: '2024-02-25',
    homeTeam: 'CD Tondela B',
    awayTeam: 'SCVB',
    time: '15:00',
    competition: 'Campeonato Distrital',
  },
];

function MatchCard({ match, isResult }) {
  const date = new Date(match.date);
  const formattedDate = new Intl.DateTimeFormat('pt-PT', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  }).format(date);

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        borderRadius: 2,
        height: '120px', // Fixed height for consistency
        display: 'flex',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 20px rgba(227, 27, 35, 0.15)',
        },
      }}
    >
      {/* Date Column */}
      <Box
        sx={{
          width: '100px',
          backgroundColor: '#141414',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          borderRight: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#E31B23',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontSize: '0.85rem',
          }}
        >
          {formattedDate}
        </Typography>
        {!isResult && (
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 600,
              mt: 0.5,
              fontSize: '0.75rem',
              letterSpacing: '0.5px',
            }}
          >
            {match.time}
          </Typography>
        )}
      </Box>

      {/* Match Details */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 2,
        }}
      >
        {/* Competition */}
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 600,
            mb: 1,
            fontSize: '0.7rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          {match.competition}
        </Typography>

        {/* Teams and Score */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          {/* Home Team */}
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              fontWeight: match.homeTeam === 'SCVB' ? 800 : 500,
              flex: 1,
              textAlign: 'right',
              fontSize: '0.95rem',
              letterSpacing: '0.3px',
              textTransform: match.homeTeam === 'SCVB' ? 'uppercase' : 'none',
            }}
          >
            {match.homeTeam}
          </Typography>

          {/* Score or VS */}
          <Box
            sx={{
              minWidth: '80px',
              textAlign: 'center',
            }}
          >
            {isResult ? (
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  fontSize: '1.5rem',
                  fontFamily: 'monospace',
                }}
              >
                <span>{match.homeScore}</span>
                <span style={{ color: '#E31B23', fontSize: '0.8em', fontWeight: 400 }}>-</span>
                <span>{match.awayScore}</span>
              </Typography>
            ) : (
              <Typography
                variant="body2"
                sx={{
                  color: '#E31B23',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '1px',
                }}
              >
                VS
              </Typography>
            )}
          </Box>

          {/* Away Team */}
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              fontWeight: match.awayTeam === 'SCVB' ? 800 : 500,
              flex: 1,
              textAlign: 'left',
              fontSize: '0.95rem',
              letterSpacing: '0.3px',
              textTransform: match.awayTeam === 'SCVB' ? 'uppercase' : 'none',
            }}
          >
            {match.awayTeam}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function MatchesOverview() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#0A0A0A',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Recent Results */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: 1,
                  fontSize: '1.5rem',
                  letterSpacing: '0.5px',
                }}
              >
                Últimos Resultados
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#E31B23',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: '0.85rem',
                  letterSpacing: '0.3px',
                  opacity: 0.9,
                }}
              >
                Acompanhe os nossos últimos jogos
              </Typography>
              <Box>
                <Grid container spacing={2}>
                  {recentResults.map((match, index) => (
                    <Grid item xs={12} key={index}>
                      <MatchCard match={match} isResult={true} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>

          {/* Upcoming Matches */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: 1,
                  fontSize: '1.5rem',
                  letterSpacing: '0.5px',
                }}
              >
                Próximos Jogos
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#E31B23',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: '0.85rem',
                  letterSpacing: '0.3px',
                  opacity: 0.9,
                }}
              >
                Não perca os próximos encontros
              </Typography>
              <Box>
                <Grid container spacing={2}>
                  {upcomingMatches.map((match, index) => (
                    <Grid item xs={12} key={index}>
                      <MatchCard match={match} isResult={false} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            to="/matches"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: 'white',
              borderColor: 'rgba(255,255,255,0.3)',
              py: 1,
              px: 4,
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            Ver Todos os Jogos
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default MatchesOverview;
