import { Box, Typography, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Maintenance = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #111111 30%, #1a1a1a 90%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: 2, md: 4 }
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '16px',
              padding: { xs: 3, md: 6 },
              border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Red accent line */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  ${theme.palette.primary.main} 50%, 
                  transparent 100%)`
              }}
            />

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 6,
                alignItems: 'center'
              }}
            >
              {/* Left side - Logo */}
              <Box sx={{ textAlign: 'center' }}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    component="img"
                    src="/images/logo.png"
                    alt="Sport Lisboa e Benfica"
                    sx={{
                      width: '100%',
                      maxWidth: 200,
                      height: 'auto',
                      marginBottom: { xs: 2, md: 0 }
                    }}
                  />
                </motion.div>
              </Box>

              {/* Right side - Content */}
              <Box>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: theme.palette.primary.main,
                      letterSpacing: '4px',
                      display: 'block',
                      marginBottom: 1
                    }}
                  >
                    AVISO
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 600,
                      marginBottom: 2,
                      fontSize: { xs: '2rem', md: '2.5rem' }
                    }}
                  >
                    Em Manutenção
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: 4,
                      lineHeight: 1.7
                    }}
                  >
                    Estamos a melhorar a sua experiência. 
                    O website estará de volta em breve com novidades.
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Maintenance;