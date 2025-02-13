import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';

function PageTemplate({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <LoadingScreen />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default PageTemplate;
