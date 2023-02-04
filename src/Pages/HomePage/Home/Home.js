import { Stack } from '@mui/material';
import React from 'react';
import Features from '../Features/Features';
import FootCategory from '../FoodCategory/FootCategory';
import Header from '../Header/Header';

const Home = () => {
    return (
        <Stack spacing={5}>
            <Header />
            <FootCategory />
            <Features />
        </Stack>
    );
};

export default Home;