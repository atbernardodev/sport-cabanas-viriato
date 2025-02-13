import { Box, Container, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import GroupsIcon from '@mui/icons-material/Groups';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const benefits = [
  {
    icon: <LocalActivityIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Prioridade em Bilhetes',
    description: 'Acesso prioritário a bilhetes para todos os jogos em casa',
  },
  {
    icon: <CardMembershipIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Cartão de Sócio',
    description: 'Cartão personalizado com benefícios exclusivos',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: '2.5rem' }} />,
    title: 'Comunidade SCVB',
    description: 'Faça parte da nossa família e participe em eventos exclusivos',
  },
];

const membershipFeatures = [
  'Descontos exclusivos na loja oficial',
  'Acesso a eventos especiais do clube',
  'Newsletter mensal exclusiva',
  'Participação nas assembleias gerais',
  'Desconto em parceiros do clube',
  'Cartão de aniversário personalizado',
];

function Membership() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically handle the form submission
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Obrigado pelo seu interesse! Em breve entraremos em contacto.');
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: '#0A0A0A', color: 'white', overflow: 'hidden' }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            py: { xs: 12, md: 20 },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(227, 27, 35, 0.15) 0%, transparent 100%)',
              filter: 'blur(100px)',
              transform: 'translateY(-30%)',
            },
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      fontWeight: 800,
                      mb: 3,
                      background: 'linear-gradient(90deg, #FFFFFF 0%, #E31B23 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Torna-te Parte da Nossa História
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      fontWeight: 500,
                      mb: 4,
                      color: 'rgba(255,255,255,0.9)',
                      maxWidth: '600px',
                    }}
                  >
                    Mais do que um clube, somos uma família. Junte-se a nós e viva o Sport Cabanas de Viriato e Benfica de uma forma única.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    sx={{
                      backgroundColor: '#E31B23',
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: '#c41219',
                      },
                    }}
                  >
                    {isSubmitting ? 'A processar...' : 'Tornar-me Sócio Agora'}
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#0F0F0F' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} md={4} key={benefit.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 4,
                        height: '100%',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        borderRadius: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: '#E31B23',
                          mb: 2,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {benefit.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '1rem',
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 4,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    Benefícios Exclusivos
                  </Typography>
                  <Box>
                    {membershipFeatures.map((feature, index) => (
                      <Box
                        key={feature}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                          gap: 2,
                        }}
                      >
                        <CheckCircleIcon sx={{ color: '#E31B23' }} />
                        <Typography
                          sx={{
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.9)',
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 4,
                      backgroundColor: 'rgba(227, 27, 35, 0.03)',
                      borderRadius: 2,
                      border: '1px solid rgba(227, 27, 35, 0.1)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                        textAlign: 'center',
                      }}
                    >
                      Torna-te Sócio Hoje
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        mb: 4,
                        textAlign: 'center',
                        fontSize: '1.1rem',
                      }}
                    >
                      Junte-se a nós por apenas €5/mês e faça parte desta família
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        sx={{
                          backgroundColor: '#E31B23',
                          px: 6,
                          py: 1.5,
                          fontSize: '1.1rem',
                          '&:hover': {
                            backgroundColor: '#c41219',
                          },
                        }}
                      >
                        {isSubmitting ? 'A processar...' : 'Inscrever-me'}
                      </Button>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Membership;
