import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlexBox } from '../../Components/StyledComponents/FlexBox';
import useMealById from '../../Hooks/useMealById';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CounterBox } from './mealDetails.style';

const MealDetails = () => {
    const { mealId } = useParams();

    const { meal } = useMealById(mealId)
    console.log(meal);

    const [quantity, setQuantity] = useState(0)

    return (
        <Box>
            <Container>
                <FlexBox sx={{ my: 5, gap: 10 }}>
                    {/* meal details will be here */}
                    <Box>
                        <Stack spacing={4}>
                            <Typography variant='h4' fontWeight='600'>
                                {meal.title}
                            </Typography>
                            <Typography
                                variant='body'
                                color='primary.greyText'
                                sx={{
                                    width: 450
                                }}
                            >
                                {meal.description}
                            </Typography>
                            <FlexBox>
                                <Typography variant='h4' fontWeight={400}>
                                    ${meal.Price}
                                </Typography>
                                <CounterBox>
                                    <AddIcon onClick={() => setQuantity(quantity + 1)} />
                                    <Typography
                                        variant='h5'
                                        sx={{ width: '20px' }}
                                        fontWeight={600}
                                    >
                                        {quantity}
                                    </Typography>
                                    <RemoveIcon onClick={() => setQuantity(quantity - 1)} />
                                </CounterBox>
                            </FlexBox>

                            <Button
                                startIcon={<ShoppingCartOutlinedIcon />}
                                sx={{
                                    width: ['100%', '100%', '40%'],
                                }}
                            >
                                ADD
                            </Button>
                        </Stack>
                    </Box>
                    {/* image will be here */}
                    <Box sx={{ flex: 1 }}>
                        <img
                            src={meal.defaultImage}
                            alt="meal"
                            style={{
                                maxWidth: '100%',
                                width: '400px',
                                margin: '0 auto',
                                display: 'block',
                            }}
                        />
                    </Box>
                </FlexBox>
            </Container>
        </Box>
    );
};

export default MealDetails;