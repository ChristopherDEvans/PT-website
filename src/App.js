import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // import your custom theme
import CssBaseline from '@mui/material/CssBaseline'; // helps with CSS baseline
import Hero from './components/Hero'; // example component

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply baseline CSS across the app */}
      <Hero /> {/* Example usage of the Hero component */}
      {/* other components */}
    </ThemeProvider>
  );
}

export default App;

