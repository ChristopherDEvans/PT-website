import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
    return (
<Box sx={{
  padding: 4,
  backgroundColor: 'background.paper', // Use themed background
  color: 'text.primary', // Use themed text color
  borderRadius: 2, // Rounded corners
  boxShadow: 3, // Subtle shadow for depth
}}>
  <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
    About Me
  </Typography>
  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
    I am a certified personal trainer with over 10 years of experience helping clients achieve their fitness goals...
  </Typography>
</Box>

    );
}

export default About;
