import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E31B23', // Benfica Red
      light: '#ff4f4f',
      dark: '#a80000',
    },
    secondary: {
      main: '#FFFFFF', // White
      light: '#FFFFFF',
      dark: '#f0f0f0',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#E31B23',
        },
      },
    },
  },
});

export default theme;
