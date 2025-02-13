import { Box, Container, Typography, Grid, useTheme, useMediaQuery, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const timelineEvents = [
  {
    year: '1937',
    title: 'Fundação',
    description: 'Nasce o Sport Cabanas de Viriato e Benfica, fruto da paixão pelo desporto.',
  },
  {
    year: '1950',
    title: 'Primeiro Título',
    description: 'Conquista do primeiro campeonato regional.',
  },
  {
    year: '1975',
    title: 'Nova Era',
    description: 'Inauguração do novo campo de jogos.',
  },
  {
    year: '2027',
    title: '90º Aniversário',
    description: 'Nove décadas de história, tradição e conquistas.',
  },
];

function HistoryTeaser() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleExploreHistory = () => {
    navigate('/about#history');
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: 'url("images/logo.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right -200px',
          backgroundSize: '800px',
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2.25rem', md: '3rem' },
                mb: 2,
              }}
            >
              Nossa História
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '700px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.6,
              }}
            >
              Uma jornada de paixão, dedicação e conquistas que começou em 1937.
            </Typography>
          </motion.div>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative', px: { xs: 2, md: 6 } }}>
          {/* Horizontal Timeline Line */}
          {!isMobile && (
            <Box
              sx={{
                position: 'absolute',
                top: '205px', // Align with dots (80px + 120px padding + 5px for center alignment)
                left: '5%',
                right: '5%',
                height: '2px',
                backgroundColor: 'rgba(227, 27, 35, 0.3)',
                zIndex: 0,
              }}
            />
          )}

          <Grid container spacing={{ xs: 2, md: 6 }} sx={{ position: 'relative' }}>
            {timelineEvents.map((event, index) => (
              <Grid item xs={6} md={3} key={event.year}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        pt: !isMobile ? '120px' : '0',
                        pb: 1,
                        position: 'relative',
                        height: '100%',
                        transition: 'transform 0.3s ease',
                        textAlign: 'center',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: !isMobile ? '80px' : '50%',
                          left: !isMobile ? '50%' : '-30px',
                          transform: !isMobile ? 'translateX(-50%)' : 'translateY(-50%)',
                          width: '12px',
                          height: '12px',
                          backgroundColor: '#E31B23',
                          borderRadius: '50%',
                          zIndex: 1,
                          boxShadow: '0 0 0 4px rgba(227, 27, 35, 0.1)',
                        },
                        ...(isMobile && {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 1,
                        }),
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          color: '#E31B23',
                          fontWeight: 700,
                          fontSize: { xs: '2rem', md: '3rem' },
                          lineHeight: 1,
                          mb: { xs: 0.5, md: 1 },
                          position: 'relative',
                          ...(isMobile && {
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: '-4px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '20px',
                              height: '2px',
                              backgroundColor: '#E31B23',
                              opacity: 0.5,
                            },
                          }),
                        }}
                      >
                        {event.year}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          fontSize: { xs: '0.9rem', md: '1.25rem' },
                          mb: { xs: 0.5, md: 1 },
                          minHeight: { xs: 'auto', md: '3em' },
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          ...(isMobile && {
                            maxWidth: '90%',
                          }),
                        }}
                      >
                        {event.title}
                      </Typography>
                      {!isMobile && (
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            maxWidth: '250px',
                            mx: 'auto',
                            mb: 1,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {event.description}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: 'center',
            mt: { xs: 2, md: 3 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outlined"
              onClick={handleExploreHistory}
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)',
                px: 4,
                py: 1,
                fontSize: '1rem',
                '&:hover': {
                  borderColor: '#E31B23',
                  backgroundColor: 'rgba(227, 27, 35, 0.1)',
                },
              }}
            >
              Explorar nossa história completa
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default HistoryTeaser;
