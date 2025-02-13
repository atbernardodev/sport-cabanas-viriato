import { Box, Card, CardContent, Typography, Button, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductCard({ product }) {
  return (
    <Card
      component={motion.div}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#111111',
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Sale Tag */}
      {product.discount > 0 && (
        <Chip
          label={`-${product.discount}%`}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: '#E31B23',
            color: 'white',
            fontWeight: 600,
            zIndex: 2,
          }}
        />
      )}

      {/* Wishlist Button */}
      <IconButton
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          zIndex: 2,
          '&:hover': {
            backgroundColor: 'rgba(227, 27, 35, 0.8)',
          },
        }}
      >
        <FavoriteIcon />
      </IconButton>

      {/* Product Image */}
      <Box
        sx={{
          position: 'relative',
          pt: '100%', /* 1:1 Aspect Ratio */
          backgroundColor: '#1a1a1a',
          '&:hover .product-image': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          className="product-image"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>

      {/* Product Info */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Category */}
        <Typography
          variant="overline"
          sx={{
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 500,
            letterSpacing: 1,
          }}
        >
          {product.category}
        </Typography>

        {/* Name */}
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 600,
            mb: 1,
            minHeight: '64px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.name}
        </Typography>

        {/* Price */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Typography
            variant="h5"
            sx={{
              color: product.discount > 0 ? '#E31B23' : 'white',
              fontWeight: 700,
            }}
          >
            {product.discount > 0
              ? `€${(product.price * (1 - product.discount / 100)).toFixed(2)}`
              : `€${product.price.toFixed(2)}`}
          </Typography>
          {product.discount > 0 && (
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'line-through',
              }}
            >
              €{product.price.toFixed(2)}
            </Typography>
          )}
        </Box>

        {/* Size Options if available */}
        {product.sizes && (
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                display: 'block',
                mb: 1,
              }}
            >
              Tamanhos Disponíveis
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {product.sizes.map((size) => (
                <Chip
                  key={size}
                  label={size}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(227, 27, 35, 0.2)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          fullWidth
          sx={{
            mt: 'auto',
            backgroundColor: '#E31B23',
            color: 'white',
            py: 1.5,
            '&:hover': {
              backgroundColor: '#c41820',
            },
          }}
        >
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
