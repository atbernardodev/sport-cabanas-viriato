import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const featuredNews = [
  {
    id: 1,
    title: 'Vitória importante fora de casa',
    date: '2024-02-10',
    category: 'Jogo',
    excerpt: 'A equipa conquistou uma vitória importante no último fim de semana...',
    image: 'https://placehold.co/300x200/1a1a1a/e31b23/png?text=Match',
  },
  {
    id: 2,
    title: 'Nova parceria com empresa local',
    date: '2024-02-08',
    category: 'Clube',
    excerpt: 'O SCVB estabeleceu uma nova parceria estratégica...',
    image: 'https://placehold.co/300x200/1a1a1a/e31b23/png?text=Partnership',
  },
  {
    id: 3,
    title: 'Treino aberto aos sócios',
    date: '2024-02-07',
    category: 'Treino',
    excerpt: 'No próximo sábado, o treino será aberto aos sócios...',
    image: 'https://placehold.co/300x200/1a1a1a/e31b23/png?text=Training',
  },
];

function FeaturedNews() {
  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: '#0A0A0A',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <NewspaperIcon sx={{ color: '#E31B23' }} />
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 700,
                letterSpacing: '0.5px',
              }}
            >
              Últimas Notícias
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/news"
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: 'white',
              borderColor: 'rgba(255,255,255,0.3)',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.05)',
              },
              textTransform: 'none',
              fontSize: '0.9rem',
            }}
          >
            Ver Todas as Notícias
          </Button>
        </Box>

        <Grid container spacing={2}>
          {featuredNews.map((news) => (
            <Grid item xs={12} key={news.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Box
                  component={Link}
                  to={`/news/${news.id}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    backgroundColor: '#141414',
                    borderRadius: 2,
                    overflow: 'hidden',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 20px rgba(227, 27, 35, 0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 180,
                      height: 120,
                      flexShrink: 0,
                      position: 'relative',
                    }}
                  >
                    <Box
                      component="img"
                      src={news.image}
                      alt={news.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        backgroundColor: '#E31B23',
                        color: 'white',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      {news.category}
                    </Typography>
                  </Box>
                  <Box sx={{ py: 2, pr: 3, flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255,255,255,0.5)',
                          fontSize: '0.75rem',
                        }}
                      >
                        {new Date(news.date).toLocaleDateString('pt-PT', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 1,
                        lineHeight: 1.3,
                      }}
                    >
                      {news.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: 1.4,
                      }}
                    >
                      {news.excerpt}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturedNews;
