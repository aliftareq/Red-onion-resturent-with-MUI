import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FlexBox } from '../../Components/StyledComponents/FlexBox';
import useMealById from '../../Hooks/useMealById';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CounterBox } from './mealDetails.style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import { useCart } from '../../Hooks/useCart';

const MealDetails = () => {
    const { mealId } = useParams();

    const { meal } = useMealById(mealId)
    console.log(meal);

    const { setCart } = useCart()

    const [quantity, setQuantity] = useState(0)

    //handlers 
    const addToCartHandler = () => {
        setCart((cart) => [...cart, { ...meal, quantity }])
    }

    const adjustQuantity = (type) => {
        setQuantity(type === 'add' ? quantity + 1 : quantity - 1);
        setCart((cart) =>
            cart.map((item) => {
                if (item._id === meal._id) {
                    return {
                        ...item,
                        quantity:
                            type === 'add' ? item.quantity + 1 : item.quantity - 1,
                    };
                }

                return item;
            })
        );
    };

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
                                    <AddIcon onClick={() => adjustQuantity('add')} />
                                    <Typography
                                        variant='h5'
                                        sx={{ width: '20px' }}
                                        fontWeight={600}
                                    >
                                        {quantity}
                                    </Typography>
                                    <RemoveIcon onClick={() => adjustQuantity('remove')} />
                                </CounterBox>
                            </FlexBox>
                            <Button
                                startIcon={<ShoppingCartOutlinedIcon />}
                                sx={{
                                    width: ['100%', '100%', '40%'],
                                }}
                                onClick={addToCartHandler}
                            >
                                ADD
                            </Button>
                        </Stack>
                        {/* slider */}
                        <Box my={10}>
                            <ImageSlider images={meal?.images} />
                        </Box>
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