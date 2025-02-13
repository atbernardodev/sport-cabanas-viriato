import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import NewsCard from '../components/NewsCard';
import { newsData } from '../data/newsData';

function News() {
  return (
    <Box sx={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 6, md: 8 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(135deg, rgba(227, 27, 35, 0.15) 0%, transparent 100%)',
            filter: 'blur(120px)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textAlign: 'center',
                mb: 2,
                position: 'relative',
              }}
            >
              Últimas Notícias
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                mb: { xs: 4, md: 6 },
                position: 'relative',
              }}
            >
              Acompanhe as últimas novidades, resultados e eventos do Sport Clube Cabanas de Viriato e Benfica
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* News Grid */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {/* Featured News - First Item */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <NewsCard
                news={newsData[0]}
                featured={true}
                sx={{
                  height: { xs: '400px', md: '500px' },
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              />
            </motion.div>
          </Grid>

          {/* Regular News Items */}
          {newsData.slice(1).map((news, index) => (
            <Grid item xs={12} sm={6} md={4} key={news.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index + 1) * 0.1 }}
              >
                <NewsCard
                  news={news}
                  sx={{
                    height: { xs: '300px', md: '360px' },
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default News;
