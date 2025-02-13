import { Box, Container, Typography, IconButton, Grid, Link as MuiLink, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

function Footer() {
  const footerSections = [
    {
      title: 'Clube',
      links: [
        { label: 'Sobre Nós', path: '/about' },
        { label: 'História', path: '/about#history' },
        { label: 'Equipa Técnica', path: '/about#staff' },
        { label: 'Instalações', path: '/about#facilities' },
        { label: 'Contactos', path: '/contact' },
      ],
    },
    {
      title: 'Competição',
      links: [
        { label: 'Equipa Principal', path: '/teams' },
        { label: 'Calendário', path: '/matches' },
        { label: 'Classificação', path: '/matches#standings' },
        { label: 'Estatísticas', path: '/matches#stats' },
      ],
    },
    {
      title: 'Comunidade',
      links: [
        { label: 'Notícias', path: '/news' },
        { label: 'Sócios', path: '/fans' },
        { label: 'Loja', path: '/shop' },
        { label: 'Media', path: '/media' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FacebookIcon, url: 'https://facebook.com', label: 'Facebook' },
    { icon: InstagramIcon, url: 'https://instagram.com', label: 'Instagram' },
    { icon: TwitterIcon, url: 'https://twitter.com', label: 'Twitter' },
    { icon: WhatsAppIcon, url: 'https://whatsapp.com', label: 'WhatsApp' },
  ];

  const contactInfo = {
    address: 'Rua Principal 123, Cabanas de Viriato, 3430-630',
    phone: '+351 232 699 123',
    email: 'geral@scvb.pt',
  };

  return (
    <Box component="footer">
      {/* Main Footer */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: '#111111',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            background: 'url("/images/pattern.png")',
            backgroundSize: '200px',
            zIndex: 0,
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'radial-gradient(circle at top right, rgba(227, 27, 35, 0.1), transparent 70%)',
            zIndex: 0,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4}>
            {/* Logo and Description */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <motion.img
                  src="/images/logo.png"
                  alt="SCVB Logo"
                  style={{
                    height: '80px',
                    width: 'auto',
                    marginBottom: '1rem',
                    filter: 'drop-shadow(0 2px 8px rgba(227, 27, 35, 0.3))',
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              </Box>

              {/* Contact Information */}
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ color: '#E31B23', mr: 1 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {contactInfo.address}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ color: '#E31B23', mr: 1 }} />
                  <MuiLink
                    href={`tel:${contactInfo.phone}`}
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      '&:hover': { color: '#E31B23' },
                    }}
                  >
                    {contactInfo.phone}
                  </MuiLink>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ color: '#E31B23', mr: 1 }} />
                  <MuiLink
                    href={`mailto:${contactInfo.email}`}
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      '&:hover': { color: '#E31B23' },
                    }}
                  >
                    {contactInfo.email}
                  </MuiLink>
                </Box>
              </Box>
            </Grid>

            {/* Quick Links */}
            {footerSections.map((section) => (
              <Grid item xs={12} sm={6} md={2} key={section.title}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  {section.title}
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                  }}
                >
                  {section.links.map((link) => (
                    <Box
                      component="li"
                      key={link.label}
                      sx={{ mb: 1.5 }}
                    >
                      <Link
                        to={link.path}
                        style={{ textDecoration: 'none' }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: '#E31B23',
                              transform: 'translateX(5px)',
                            },
                            display: 'inline-block',
                          }}
                        >
                          {link.label}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}

            {/* Newsletter Section */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Seja Sócio
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  mb: 2,
                }}
              >
                Junte-se à nossa família e faça parte desta história.
              </Typography>
              <Button
                component={Link}
                to="/membership"
                variant="contained"
                sx={{
                  backgroundColor: '#E31B23',
                  color: 'white',
                  mt: 2,
                  '&:hover': {
                    backgroundColor: '#c41219',
                  },
                  textDecoration: 'none',
                }}
              >
                Tornar-me Sócio
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Footer */}
      <Box
        sx={{
          py: 2,
          backgroundColor: '#0A0A0A',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Copyright */}
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                textAlign: { xs: 'center', sm: 'left' },
                fontWeight: 300,
                letterSpacing: '0.02em',
              }}
            >
              {new Date().getFullYear()} Sport Cabanas de Viriato e Benfica. Todos os direitos reservados.
            </Typography>

            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: 'white',
                      transition: 'all 0.2s ease',
                      padding: '8px',
                      '&:hover': {
                        color: '#E31B23',
                        background: 'rgba(227, 27, 35, 0.08)',
                      },
                    }}
                    size="small"
                  >
                    <social.icon fontSize="small" />
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
