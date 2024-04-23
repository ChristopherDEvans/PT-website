import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

function Contact() {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>Contact</Typography>
            <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">Send</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default Contact;
