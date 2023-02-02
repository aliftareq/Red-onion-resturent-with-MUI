import { Box, Container } from '@mui/material';
import React from 'react';
import bg from '../../../Assets/images/bannerbackground.png';

const Header = () => {
    return (
        <Box sx={{
            height: '70vh',
            width: '100%',
            background: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '110%'
        }}>
            <Container>
                <h1>Therer will be a banner for website</h1>
            </Container>
        </Box>
    );
};

export default Header;