import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

function TeamPreview() {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: '#0A0A0A',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(227, 27, 35, 0.1)',
                  borderRadius: 1,
                  px: 1.5,
                  py: 0.5,
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    color: '#E31B23',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    letterSpacing: 1,
                  }}
                >
                  NOSSA EQUIPA
                </Typography>
              </Box>
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Conheça os Nossos Atletas
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                Uma equipa unida, determinada e apaixonada pelo clube. Cada jogador traz sua própria história
                e talento para formar um grupo forte e competitivo.
              </Typography>

              {/* Stats */}
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {[
                  { icon: <PeopleIcon />, value: '24', label: 'Atletas' },
                  { icon: <SportsSoccerIcon />, value: '18', label: 'Jogos' },
                  { icon: <EmojiEventsIcon />, value: '3', label: 'Troféus' },
                ].map((stat, index) => (
                  <Grid item xs={4} key={index}>
                    <Box
                      sx={{
                        backgroundColor: '#141414',
                        borderRadius: 2,
                        p: 2,
                        textAlign: 'center',
                      }}
                    >
                      <Box sx={{ color: '#E31B23', mb: 1 }}>{stat.icon}</Box>
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          mb: 0.5,
                          fontSize: '1.5rem',
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.875rem',
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Button
                component={Link}
                to="/team"
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.2)',
                  px: 3,
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#E31B23',
                    backgroundColor: 'rgba(227, 27, 35, 0.1)',
                  },
                  textTransform: 'none',
                  fontSize: '1rem',
                }}
              >
                Conhecer a Equipa
              </Button>
            </motion.div>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '400px' },
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
                }}
              >
                <Box
                  component="img"
                  src="https://placehold.co/800x600/1a1a1a/e31b23/png?text=Equipa+SCVB"
                  alt="Equipa SCVB"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Próximo Jogo
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                    }}
                  >
                    SCVB vs SC Viseu • 17 Fev, 15:00
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default TeamPreview;
