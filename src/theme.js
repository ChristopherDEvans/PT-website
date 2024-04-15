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
      main: '#1976d2',
    },
    secondary: {
      main: '#ff9800',
    },
    background: {
      default: '#424242',
      paper: '#303030',
    },
  },
});

export default theme;
