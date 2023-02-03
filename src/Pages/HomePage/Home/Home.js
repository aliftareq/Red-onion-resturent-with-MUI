import { Stack } from '@mui/material';
import React from 'react';
import FootCategory from '../FoodCategory/FootCategory';
import Header from '../Header/Header';

const Home = () => {
    return (
        <Stack spacing={5}>
            <Header />
            <FootCategory />
        </Stack>
    );
};

export default Home;