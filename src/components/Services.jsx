import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

function Services() {
    const services = [
        { title: 'Personal Training', description: 'One-on-one sessions to help you reach your specific fitness goals.' },
        { title: 'Group Classes', description: 'Fun and engaging classes that keep you motivated.' },
        { title: 'Online Coaching', description: 'Get custom workout plans and coaching from anywhere in the world.' }
    ];

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>Services</Typography>
            <Grid container spacing={2}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2">
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