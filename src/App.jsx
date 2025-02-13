import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Teams from './pages/Teams';
import Matches from './pages/Matches';
import News from './pages/News';
import Academy from './pages/Academy';
import Fans from './pages/Fans';
import Shop from './pages/Shop';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Membership from './pages/Membership';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/news" element={<News />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/fans" element={<Fans />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
