import { AppBar, Box, Container, IconButton, useTheme, useMediaQuery, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/teams', label: 'Equipa' },
    { path: '/matches', label: 'Jogos' },
    { path: '/news', label: 'Notícias' },
    { path: '/shop', label: 'Loja' },
    { path: '/about', label: 'História' },
  ];

  const NavLink = ({ path, label, onClick }) => (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link
        to={path}
        onClick={onClick}
        style={{ textDecoration: 'none' }}
      >
        <Box
          sx={{
            position: 'relative',
            color: 'white',
            padding: '8px 16px',
            fontSize: '0.95rem',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#E31B23',
              transform: 'translateY(-2px)',
            },
            ...(location.pathname === path && {
              color: '#E31B23',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -4,
                left: '50%',
                width: '25%',
                height: '2px',
                backgroundColor: '#E31B23',
                borderRadius: '2px',
                transform: 'translateX(-50%)',
              },
            }),
          }}
        >
          {label}
        </Box>
      </Link>
    </motion.div>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(17, 17, 17, 0.98)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.15)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2,
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, md: 2 },
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src="/images/logo.png"
              alt="SCVB Logo"
              sx={{
                height: { xs: '40px', md: '50px' },
                width: 'auto',
              }}
            />
            {/* Desktop Version */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  fontSize: { md: '1.1rem', lg: '1.25rem' },
                }}
              >
                Sport Cabanas
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#E31B23',
                  fontWeight: 600,
                  lineHeight: 1,
                  fontSize: { md: '0.8rem', lg: '0.875rem' },
                }}
              >
                de Viriato e Benfica
              </Typography>
            </Box>
            {/* Mobile Version */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  lineHeight: 1,
                  fontSize: '0.75rem',
                }}
              >
                SCVB
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#E31B23',
                  fontWeight: 600,
                  lineHeight: 1,
                  fontSize: '0.65rem',
                  display: 'block',
                }}
              >
                1937
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              component={motion.div}
              sx={{
                display: 'flex',
                gap: 3,
                alignItems: 'center',
              }}
            >
              {navItems.map((item) => (
                <NavLink key={item.path} {...item} />
              ))}
              <Button
                component={Link}
                to="/membership"
                variant="contained"
                sx={{
                  backgroundColor: '#E31B23',
                  '&:hover': {
                    backgroundColor: '#c41219',
                  },
                  textDecoration: 'none',
                  ml: 2,
                }}
              >
                Tornar-me Sócio
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(227, 27, 35, 0.1)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Mobile Menu */}
        {isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: mobileMenuOpen ? 'auto' : 0,
              opacity: mobileMenuOpen ? 1 : 0,
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            style={{ overflow: 'hidden' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                py: 3,
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  {...item}
                  onClick={() => setMobileMenuOpen(false)}
                />
              ))}
              <Button
                component={Link}
                to="/membership"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#E31B23',
                  '&:hover': {
                    backgroundColor: '#c41219',
                  },
                  textDecoration: 'none',
                  mt: 2,
                }}
              >
                Tornar-me Sócio
              </Button>
            </Box>
          </motion.div>
        )}
      </Container>
    </AppBar>
  );
}

export default Navbar;
