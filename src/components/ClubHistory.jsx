import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '1937',
    title: 'Fundação',
    description: 'Sport Cabanas de Viriato e Benfica nasce da paixão pelo futebol.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&q=80',
  },
  {
    year: '1950',
    title: 'Primeiro Título',
    description: 'Conquista do primeiro campeonato regional.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&q=80',
  },
  {
    year: '1975',
    title: 'Novo Estádio',
    description: 'Inauguração do estádio atual, uma nova casa para o clube.',
    image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=500&q=80',
  },
  {
    year: '2000',
    title: 'Modernização',
    description: 'Início do processo de modernização das instalações.',
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=500&q=80',
  },
  {
    year: '2027',
    title: '90º Aniversário',
    description: 'Nove décadas de história, tradição e conquistas.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80',
  },
];

function ClubHistory() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '400px',
          background: 'linear-gradient(180deg, rgba(227, 27, 35, 0.03) 0%, transparent 100%)',
          filter: 'blur(100px)',
          transform: 'translateY(-50%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '400px',
          background: 'linear-gradient(0deg, rgba(227, 27, 35, 0.03) 0%, transparent 100%)',
          filter: 'blur(100px)',
          transform: 'translateY(50%)',
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
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
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 3,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent, #E31B23, transparent)',
                  borderRadius: '2px',
                },
              }}
            >
              Nossa História
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                maxWidth: '700px',
                mx: 'auto',
                mt: 4,
              }}
            >
              Uma jornada de paixão e dedicação que começou em 1937
            </Typography>
          </motion.div>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative', mt: { xs: 6, md: 10 } }}>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  mb: { xs: 6, md: 15 },
                  '&:last-child': {
                    mb: 0,
                  },
                }}
              >
                {/* Timeline Line */}
                {!isMobile && (
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      top: 0,
                      bottom: '-120px',
                      width: '1px',
                      background: 'linear-gradient(180deg, #E31B23 0%, transparent 100%)',
                      opacity: 0.3,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#E31B23',
                        borderRadius: '50%',
                        boxShadow: '0 0 20px rgba(227, 27, 35, 0.5)',
                      },
                    }}
                  />
                )}

                {/* Content */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : index % 2 === 0 ? 'row' : 'row-reverse',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    gap: { xs: 3, md: 8 },
                    px: { xs: 3, md: 0 },
                    position: 'relative',
                    ...(isMobile && {
                      pb: 6,
                      '&:last-child': {
                        pb: 0,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '22px',
                        top: '16px',
                        bottom: 0,
                        width: '2px',
                        backgroundColor: 'rgba(227, 27, 35, 0.1)',
                      },
                    }),
                  }}
                >
                  {/* Text Content */}
                  <Box
                    sx={{
                      flex: 1,
                      textAlign: isMobile ? 'left' : index % 2 === 0 ? 'right' : 'left',
                      position: 'relative',
                      width: '100%',
                      ...(isMobile && {
                        pl: '60px',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: '18px',
                          top: '16px',
                          width: '10px',
                          height: '10px',
                          backgroundColor: '#E31B23',
                          borderRadius: '50%',
                          zIndex: 1,
                        },
                      }),
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          color: '#E31B23',
                          fontWeight: 800,
                          fontSize: { xs: '2rem', md: '4rem' },
                          lineHeight: 1,
                          opacity: 0.9,
                        }}
                      >
                        {event.year}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          fontSize: { xs: '1.1rem', md: '1.75rem' },
                          letterSpacing: { xs: '0.5px', md: 'normal' },
                        }}
                      >
                        {event.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: { xs: '0.9rem', md: '1.1rem' },
                          lineHeight: 1.6,
                          maxWidth: isMobile ? '100%' : '400px',
                          margin: isMobile ? '0' : index % 2 === 0 ? 'auto 0 auto auto' : '0 auto 0 0',
                        }}
                      >
                        {event.description}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Image - Only show on desktop */}
                  {!isMobile && (
                    <Box
                      sx={{
                        flex: 1,
                        position: 'relative',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          paddingTop: '66.67%',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={event.image}
                          alt={event.title}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                          }}
                        />
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default ClubHistory;
