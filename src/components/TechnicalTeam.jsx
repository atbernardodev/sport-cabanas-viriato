import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const technicalTeam = [
  {
    name: 'José Silva',
    role: 'Treinador Principal',
    image: 'https://placehold.co/400x500/1a1a1a/e31b23/png?text=Coach',
  },
  {
    name: 'António Santos',
    role: 'Treinador Adjunto',
    image: 'https://placehold.co/400x500/1a1a1a/e31b23/png?text=Assistant',
  },
  {
    name: 'Manuel Oliveira',
    role: 'Preparador Físico',
    image: 'https://placehold.co/400x500/1a1a1a/e31b23/png?text=Fitness',
  },
  {
    name: 'João Costa',
    role: 'Treinador de Guarda-Redes',
    image: 'https://placehold.co/400x500/1a1a1a/e31b23/png?text=GK+Coach',
  },
  {
    name: 'Carlos Rodrigues',
    role: 'Fisioterapeuta',
    image: 'https://placehold.co/400x500/1a1a1a/e31b23/png?text=Physio',
  },
];

function TechnicalTeam() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#0A0A0A',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="overline"
            align="center"
            sx={{
              color: '#E31B23',
              fontWeight: 600,
              letterSpacing: 2,
              display: 'block',
              mb: 1,
            }}
          >
            EQUIPA TÉCNICA
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 6,
            }}
          >
            A Nossa Equipa Técnica
          </Typography>
        </motion.div>

        {/* Technical Team Grid */}
        <Grid container spacing={4} justifyContent="center">
          {technicalTeam.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '125%',
                      borderRadius: 2,
                      overflow: 'hidden',
                      backgroundColor: '#1a1a1a',
                      mb: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#E31B23',
                      fontWeight: 500,
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default TechnicalTeam;
