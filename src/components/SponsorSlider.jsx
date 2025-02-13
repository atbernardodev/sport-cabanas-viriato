import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const sponsors = [
  {
    name: 'Café Central',
    logo: 'https://placehold.co/300x150/1a1a1a/e31b23/png',
    category: 'Restauração',
  },
  {
    name: 'Supermercado Dias',
    logo: 'https://placehold.co/300x150/1a1a1a/e31b23/png',
    category: 'Retalho',
  },
  {
    name: 'Farmácia Saúde',
    logo: 'https://placehold.co/300x150/1a1a1a/e31b23/png',
    category: 'Saúde',
  },
  {
    name: 'Restaurante Serra',
    logo: 'https://placehold.co/300x150/1a1a1a/e31b23/png',
    category: 'Restauração',
  },
  {
    name: 'Auto Silva',
    logo: 'https://placehold.co/300x150/1a1a1a/e31b23/png',
    category: 'Automóvel',
  },
  {
    name: 'Construções Santos',
    logo: 'https://placehold.co/300x150/1a1a1a/e31b23/png',
    category: 'Construção',
  },
  {
    name: 'Padaria Nova',
    logo: 'https://placehold.co/300x150/1a1a1a/e31b23/png',
    category: 'Restauração',
  },
  {
    name: 'Caixa Agrícola',
    logo: 'https://placehold.co/300x150/1a1a1a/e31b23/png',
    category: 'Banca',
  },
];

// Duplicate sponsors to create seamless loop
const row1 = [...sponsors, ...sponsors];
const row2 = [...sponsors.reverse(), ...sponsors.reverse()];

function SponsorSlider() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: '#0A0A0A',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
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
            PARCEIROS
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
            Os Nossos Patrocinadores
          </Typography>
        </motion.div>
      </Container>

      {/* Slider Rows */}
      <Box sx={{ position: 'relative' }}>
        {/* Gradient Overlays */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, #0A0A0A, transparent 10%, transparent 90%, #0A0A0A)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Row 1 - Left to Right */}
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            mb: 4,
            py: 2,
          }}
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              display: 'flex',
              gap: '2rem',
              whiteSpace: 'nowrap',
            }}
          >
            {row1.map((sponsor, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: '200px',
                  height: '100px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#222',
                  },
                }}
              >
                <Box
                  component="img"
                  src={sponsor.logo}
                  alt={sponsor.name}
                  sx={{
                    maxWidth: '80%',
                    maxHeight: '50%',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.6,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: '#E31B23',
                    fontWeight: 600,
                    textAlign: 'center',
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {sponsor.name}
                </Typography>
              </Box>
            ))}
          </motion.div>
        </Box>

        {/* Row 2 - Right to Left */}
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            py: 2,
          }}
        >
          <motion.div
            initial={{ x: '-50%' }}
            animate={{ x: 0 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              display: 'flex',
              gap: '2rem',
              whiteSpace: 'nowrap',
            }}
          >
            {row2.map((sponsor, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: '200px',
                  height: '100px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#222',
                  },
                }}
              >
                <Box
                  component="img"
                  src={sponsor.logo}
                  alt={sponsor.name}
                  sx={{
                    maxWidth: '80%',
                    maxHeight: '50%',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.6,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: '#E31B23',
                    fontWeight: 600,
                    textAlign: 'center',
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {sponsor.name}
                </Typography>
              </Box>
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}

export default SponsorSlider;
