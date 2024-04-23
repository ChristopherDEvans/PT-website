import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // import your custom theme
import CssBaseline from '@mui/material/CssBaseline'; // helps with CSS baseline
import Hero from './components/Hero'; // example component
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply baseline CSS across the app */}
      <Hero /> {/* Example usage of the Hero component */}
      <About /> {/* Example usage of the About component */}
      <Services /> {/* Example usage of the Services component */}
      <Testimonials /> {/* Example usage of the Testimonials component */}
      <Contact /> {/* Example usage of the Contact component */}
      {/* other components */}
    </ThemeProvider>
  );
}

export default App;

