import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroImage from '../assets/gym1.jpg';  // Adjust the path as necessary


function Hero() {
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${heroImage})`,  // Use the imported image here
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'common.white',
            textShadow: '1px 1px 8px rgba(0, 0, 0, 0.7)',
        }}>
            <Typography 
                variant="h1" 
                gutterBottom 
                sx={{ 
                    fontWeight: 'fontWeightBold', 
                    fontSize: {
                        xs: '2rem', // font size for extra-small screens
                        sm: '3rem', // font size for small screens
                        md: '4rem', // font size for medium screens
                        lg: '5rem'  // font size for large screens
                    } 
                }}>
                Empower Your Fitness Journey
            </Typography>
            <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: 'fontWeightBold' }}>
                Join Us
            </Button>
        </Box>
    );
}

export default Hero;
