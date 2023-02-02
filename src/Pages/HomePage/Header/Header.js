import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import { HeroSectionWrapper, SearchBox } from './Header.style';

const Header = () => {
    return (
        <HeroSectionWrapper>
            <Container sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box>
                    <Typography variant='h3' fontWeight={'500'}>
                        Best food waiting for your belly
                    </Typography>
                    <SearchBox>
                        <input type="search" placeholder='search food items' />
                        <button>Search</button>
                    </SearchBox>
                </Box>
            </Container>
        </HeroSectionWrapper>
    );
};

export default Header;