import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>About Me</Typography>
            <Typography variant="body1" paragraph>
                I am a certified personal trainer with over 10 years of experience helping clients achieve their fitness goals...
            </Typography>
        </Box>
    );
}

export default About;
