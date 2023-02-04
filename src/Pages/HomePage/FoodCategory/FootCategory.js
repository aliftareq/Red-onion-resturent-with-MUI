import { Box, Button, Container, Skeleton, Typography } from '@mui/material';
import React from 'react';
import TabButton from '../../../Components/Custom/TabButton';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import useMeals from '../../../Hooks/useMeals';

const categories = ['breakfast', 'launch', 'dinner'];

const FootCategory = () => {
    const [value, setValue] = React.useState(0);

    const { meals, loading } = useMeals(categories[value])

    console.log(meals);

    return (
        <Box>
            <Container>
                <Box sx={{
                    maxWidth: '500px',
                    mx: 'auto'
                }}>
                    <TabButton value={value} setValue={setValue} />
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        // auto-fit the card
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        justifyItems: 'center',
                        gap: '20px',
                        mt: 8,
                    }}
                >
                    {!loading && meals?.data?.map((meal, idx) => <FoodCard key={idx} meal={meal} />)}

                    <Button
                        sx={{
                            borderRadius: '4px',
                        }}
                    >
                        Checkout Your Food
                    </Button>

                    {loading &&
                        Array.from(new Array(6)).map((item, idx) => (
                            <Box key={idx} sx={{ width: 350 }}>
                                <Skeleton
                                    width={250}
                                    height={250}
                                    variant='circular'
                                    sx={{
                                        mx: 'auto',
                                    }}
                                    animation='wave'
                                />
                                <Skeleton width={250} height={50} variant='text' />
                                <Skeleton width={250} height={100} variant='text' />
                                <Skeleton
                                    width={100}
                                    height={70}
                                    variant='text'
                                    sx={{
                                        mx: 'auto',
                                    }}
                                />
                            </Box>
                        ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FootCategory;