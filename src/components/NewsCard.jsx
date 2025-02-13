import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

function NewsCard({ news, featured = false, sx = {} }) {
  return (
    <Card
      component={motion.div}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      sx={{
        position: 'relative',
        height: featured ? { xs: '400px', md: '500px' } : { xs: '300px', md: '360px' },
        backgroundColor: 'transparent',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)',
          },
        },
        ...sx,
      }}
    >
      <CardMedia
        component="img"
        image={news.image}
        alt={news.title}
        sx={{
          height: '100%',
          transition: 'transform 0.3s ease',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          p: featured ? 4 : 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 2,
          }}
        >
          <Typography
            sx={{
              color: '#E31B23',
              fontSize: featured ? '1rem' : '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            {news.category}
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: featured ? '1rem' : '0.875rem',
            }}
          >
            {news.date}
          </Typography>
        </Box>
        <Typography
          variant={featured ? 'h4' : 'h5'}
          sx={{
            color: 'white',
            fontWeight: 700,
            mb: 2,
            fontSize: featured ? { xs: '1.75rem', md: '2rem' } : { xs: '1.25rem', md: '1.5rem' },
            lineHeight: 1.2,
          }}
        >
          {news.title}
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: featured ? '1.1rem' : '0.95rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {news.excerpt}
        </Typography>
      </Box>
    </Card>
  );
}

export default NewsCard;
