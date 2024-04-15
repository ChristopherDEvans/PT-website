import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Hero() {
    return (
        <Box sx={{
            height: '100vh',  // Full-screen height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url("/path-to-your-hero-image.jpg")', // Background image from your assets
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'common.white', // Using white color for text for better readability
            textShadow: '1px 1px 8px rgba(0, 0, 0, 0.7)', // Text shadow for better contrast
            px: 2 // Padding on the sides
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
