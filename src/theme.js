import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato, Roboto Condensed, Arial, sans-serif',
    h1: {
      fontFamily: 'Roboto Condensed, Arial, sans-serif',
      fontWeight: 700,
    },
    button: {
      fontFamily: 'Lato, Arial, sans-serif',
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#0d47a1',  // A strong blue
    },
    secondary: {
      main: '#c62828',  // A vibrant red
    },
    background: {
      default: '#fff',  // Light background for most areas
      paper: '#f5f5f5',  // Light grey background for areas needing contrast
    },
    info: {
      main: '#2196f3'  // Bright info color for calls to action
    }
  },
});

export default theme;
