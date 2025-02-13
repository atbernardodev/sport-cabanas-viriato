import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const featuredProducts = [
  {
    id: 1,
    name: 'Camisola Principal SCVB 2024/25',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1580087433295-ab2600c1030e?w=500&q=80',
  },
  {
    id: 3,
    name: 'Casaco de Treino SCVB',
    price: 49.99,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80',
  },
  {
    id: 6,
    name: 'Boné SCVB',
    price: 19.99,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80',
  }
];

function FeaturedProducts() {
  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.1)',
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
            <ShoppingBagIcon sx={{ color: '#E31B23' }} />
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 700,
                letterSpacing: '0.5px',
              }}
            >
              Loja Oficial
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/shop"
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
            Ver Todos os Produtos
          </Button>
        </Box>

        <Grid container spacing={2}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={4} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Box
                  component={Link}
                  to={`/shop`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
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
                      width: 100,
                      height: 100,
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Box sx={{ py: 2, pr: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#E31B23',
                        fontWeight: 700,
                      }}
                    >
                      {product.discount ? `€${(product.price * (1 - product.discount / 100)).toFixed(2)}` : `€${product.price.toFixed(2)}`}
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

export default FeaturedProducts;
