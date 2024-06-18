import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box py={3} bgcolor="#333" color="#fff" textAlign="center">
            <Container>
                <Typography variant="body1">&copy; 2024 TG Dream. All rights reserved.</Typography>
            </Container>
        </Box>
    );
};

export default Footer;
