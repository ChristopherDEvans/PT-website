import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';  // Import the icon


function Services() {
  const services = [
      { title: 'Personal Training', description: 'One-on-one sessions to help you reach your specific fitness goals.', icon: <FitnessCenterIcon sx={{ fontSize: 40, color: 'secondary.main' }} /> },
      { title: 'Group Classes', description: 'Fun and engaging classes that keep you motivated.', icon: <FitnessCenterIcon sx={{ fontSize: 40, color: 'secondary.main' }} /> },
      { title: 'Online Coaching', description: 'Get custom workout plans and coaching from anywhere in the world.', icon: <FitnessCenterIcon sx={{ fontSize: 40, color: 'secondary.main' }} /> }
  ];

  return (
      <Box sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>Services</Typography>
          <Grid container spacing={2}>
              {services.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card sx={{ maxWidth: 345, boxShadow: 3, '&:hover': {
                          boxShadow: 10,  // Enhance shadow on hover
                          transform: 'scale(1.05)',  // Slightly increase size
                      },
                      transition: 'transform .2s, box-shadow .2s'  // Smooth transition for hover effect
                      }}>
                          <CardContent>
                              {service.icon}
                              <Typography gutterBottom variant="h5" component="div">
                                  {service.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                  {service.description}
                              </Typography>
                          </CardContent>
                      </Card>
                  </Grid>
              ))}
          </Grid>
      </Box>
  );
}

export default Services;
// In this example, we created a Services component that displays a list of services using the Card component from MUI. We used the Grid component to display the cards in a responsive grid layout.
// We defined an array of services with titles and descriptions, and then used the map method to iterate over the array and render a Card for each service.
// The Card component contains a CardContent component with Typography components for the title and description of each service. We used the variant prop to style the text elements.
