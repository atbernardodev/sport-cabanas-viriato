import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';
import FeaturedNews from '../components/FeaturedNews';
import FeaturedProducts from '../components/FeaturedProducts';
import HistoryTeaser from '../components/HistoryTeaser';
import SponsorSlider from '../components/SponsorSlider';
import MatchesOverview from '../components/MatchesOverview';
import TeamPreview from '../components/TeamPreview';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';

function Home() {
  return (
    <PageTemplate>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '80vh', md: '70vh' },
          minHeight: { xs: '500px', md: '600px' },
          backgroundColor: '#0A0A0A',
          overflow: 'hidden',
        }}
      >
        {/* Background Video or Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,0.6) 100%)',
            },
          }}
        >
          <Box
            component="img"
            src="https://placehold.co/1920x1080/1a1a1a/e31b23/png?text=SCVB"
            alt="SCVB Background"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>

        {/* Content */}
        <Container maxWidth="lg" sx={{ height: '100%', position: 'relative' }}>
          <Grid
            container
            sx={{
              height: '100%',
              alignItems: 'center',
            }}
          >
            <Grid item xs={12} md={8} lg={7}>
              <Box>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
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
                      90 ANOS DE HISTÓRIA
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    Sport <br />
                    <Box component="span" sx={{ color: '#E31B23' }}>
                      Cabanas de Viriato
                    </Box>
                    {' '}e Benfica
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      fontWeight: 400,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      maxWidth: '600px',
                      mb: 3,
                      lineHeight: 1.5,
                    }}
                  >
                    Nove décadas de paixão, tradição e dedicação ao desporto.
                  </Typography>
                </motion.div>
              </Box>
            </Grid>

            {/* Anniversary Badge */}
            <Grid item xs={12} md={4} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '300px',
                    height: '300px',
                    margin: '0 auto',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      border: '2px solid rgba(227, 27, 35, 0.3)',
                      animation: 'spin 20s linear infinite',
                      '@keyframes spin': {
                        '0%': {
                          transform: 'translate(-50%, -50%) rotate(0deg)',
                        },
                        '100%': {
                          transform: 'translate(-50%, -50%) rotate(360deg)',
                        },
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        color: '#E31B23',
                        fontWeight: 700,
                        fontSize: '5rem',
                        lineHeight: 1,
                      }}
                    >
                      90
                    </Typography>
                    <Typography
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                      }}
                    >
                      Anos
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.875rem',
                        mt: 1,
                      }}
                    >
                      1937 - 2027
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Matches Overview Section - Most important for a sports club */}
      <MatchesOverview />

      {/* Team Preview Section */}
      <TeamPreview />

      {/* Featured Products Section - Merchandise and fan engagement */}
      <FeaturedProducts />

      {/* Featured News Section - Important updates and announcements */}
      <FeaturedNews />

      {/* WhatsApp Community Section */}
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
            height: '100%',
            background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.05) 0%, transparent 100%)',
            filter: 'blur(120px)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    mb: 3,
                    background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Junte-se à Nossa Comunidade
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    mb: 4,
                    maxWidth: '600px',
                  }}
                >
                  Faça parte do nosso grupo no WhatsApp e fique por dentro de todas as novidades, discussões e momentos especiais do clube.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  href="https://chat.whatsapp.com/your-invite-link"
                  target="_blank"
                  sx={{
                    backgroundColor: '#25D366',
                    '&:hover': {
                      backgroundColor: '#128C7E',
                    },
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Entrar no Grupo
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {[
                  {
                    icon: <PeopleIcon sx={{ fontSize: '2.5rem' }} />,
                    title: 'Comunidade Ativa',
                    description: 'Conecte-se com outros torcedores apaixonados',
                  },
                  {
                    icon: <ChatIcon sx={{ fontSize: '2.5rem' }} />,
                    title: 'Discussões em Tempo Real',
                    description: 'Participe de conversas sobre jogos e eventos',
                  },
                  {
                    icon: <EmojiEventsIcon sx={{ fontSize: '2.5rem' }} />,
                    title: 'Momentos Especiais',
                    description: 'Compartilhe a emoção das vitórias e conquistas',
                  },
                ].map((feature, index) => (
                  <Grid item xs={12} sm={6} md={6} key={feature.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      style={{ height: '100%' }}
                    >
                      <Box
                        sx={{
                          p: 4,
                          height: '100%',
                          minHeight: '220px',
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          borderRadius: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            transition: 'transform 0.3s ease',
                          },
                        }}
                      >
                        <Box sx={{ color: '#25D366' }}>{feature.icon}</Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: 'white',
                            fontSize: '1.25rem',
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '1rem',
                            lineHeight: 1.6,
                            flex: 1,
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* History Teaser Section - Club identity and heritage */}
      <HistoryTeaser />

      {/* Sponsors Section - Important but less prominent */}
      <SponsorSlider />

      {/* Rest of the content */}
    </PageTemplate>
  );
}

export default Home;
