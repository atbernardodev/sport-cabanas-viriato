import { Box, Container, Grid, Typography, Tabs, Tab, TextField, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PageTemplate from '../components/PageTemplate';
import ProductCard from '../components/ProductCard';
import SearchIcon from '@mui/icons-material/Search';

const products = [
  {
    id: 1,
    name: 'Camisola Principal SCVB 2024/25',
    category: 'Equipamentos',
    price: 59.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1580087433295-ab2600c1030e?w=500&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Camisola Alternativa SCVB 2024/25',
    category: 'Equipamentos',
    price: 59.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1521673461164-de300ebcfb17?w=500&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    name: 'Casaco de Treino SCVB',
    category: 'Treino',
    price: 49.99,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    name: 'Calções Principais SCVB 2024/25',
    category: 'Equipamentos',
    price: 24.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1515586838455-8f8c7e9a5c05?w=500&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    name: 'Cachecol SCVB',
    category: 'Acessórios',
    price: 14.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&q=80',
  },
  {
    id: 6,
    name: 'Boné SCVB',
    category: 'Acessórios',
    price: 19.99,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80',
  },
  {
    id: 7,
    name: 'Meias Oficiais SCVB',
    category: 'Equipamentos',
    price: 12.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80',
    sizes: ['36-40', '41-45'],
  },
  {
    id: 8,
    name: 'Bola SCVB',
    category: 'Equipamento',
    price: 29.99,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=500&q=80',
  },
  {
    id: 9,
    name: 'Mochila SCVB',
    category: 'Acessórios',
    price: 34.99,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
  },
];

const categories = ['Todos', 'Equipamentos', 'Treino', 'Acessórios'];

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products
    .filter(product => selectedCategory === 'Todos' || product.category === selectedCategory)
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <PageTemplate>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#0A0A0A',
          pb: 8,
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(10,10,10,0.8) 0%, rgba(10,10,10,1) 100%)',
              zIndex: 1,
            }
          }}
        >
          {/* Background Image */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1500&q=80"
            alt="Shop Background"
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Hero Content */}
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  textAlign: 'center',
                  mb: 2,
                }}
              >
                Loja Oficial
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  textAlign: 'center',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                Equipamentos e merchandising oficial do SCVB
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Filters and Search */}
        <Container maxWidth="xl">
          <Box sx={{ my: 4 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8}>
                <Tabs
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  sx={{
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#E31B23',
                    },
                    '& .MuiTab-root': {
                      color: 'rgba(255,255,255,0.5)',
                      '&.Mui-selected': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  {categories.map((category) => (
                    <Tab
                      key={category}
                      label={category}
                      value={category}
                      sx={{ 
                        textTransform: 'none',
                        fontWeight: 500,
                        fontSize: '1rem',
                      }}
                    />
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Procurar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                      </InputAdornment>
                    ),
                    sx: {
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.2)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#E31B23',
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Products Grid */}
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageTemplate>
  );
}

export default Shop;
