import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Testimonials() {
    const testimonials = [
        { name: 'Jane Doe', text: 'Thanks to [trainer], I’ve never felt stronger!' },
        { name: 'John Smith', text: 'This training has changed my life. Highly recommend!' }
    ];

    return (
      <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom component="div">
        Testimonials
      </Typography>
      {testimonials.map((testimonial, index) => (
        <Paper elevation={3} sx={{ margin: 2, padding: 2, backgroundColor: 'background.default' }} key={index}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {testimonial.name}
          </Typography>
          <Typography variant="body1">
            {testimonial.text}
          </Typography>
        </Paper>
      ))}
    </Box>
    );
}

export default Testimonials;
// In this example, we created a Testimonials component that displays a list of testimonials using the Paper component from MUI. We used the map method to iterate over the array of testimonials and render a Paper for each testimonial.
// The Paper component contains Typography components for the name and text of each testimonial. We used the variant prop to style the text elements and added elevation and padding styles to the Paper component.
// This component can be used in the main App component to display testimonials from clients or users of the fitness app. It provides a clean and visually appealing way to showcase positive feedback.
// You can customize the styles and content of the testimonials as needed to fit the design of your fitness app. You can also add more testimonials to the array to display additional feedback from clients.