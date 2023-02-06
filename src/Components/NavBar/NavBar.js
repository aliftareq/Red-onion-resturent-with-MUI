import { Avatar, Badge, Box, Button, Container, IconButton, Stack } from '@mui/material';
import React from 'react';
import logo from '../../Assets/images/logo2.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';
import { useCart } from '../../Hooks/useCart';
import { FlexBox } from '../Styled/Flexbox';

const NavBar = () => {

    //context / hooks
    const { user, logoutUser } = useAuth()
    const { cart } = useCart()
    console.log(user, cart);

    const navigate = useNavigate()

    //handlers
    const handleLogOut = () => {
        logoutUser(navigate)
    }
    return (
        <Box>
            <Container>
                <FlexBox justifyContent='space-between' sx={{
                    padding: '1rem 0'
                }}>
                    <Box to='/' component={Link}>
                        <img src={logo}
                            alt="logoOfwebsite"
                            style={{
                                width: '150px',
                            }} />
                    </Box>
                    <Stack direction='row' spacing={4}>
                        <Badge
                            badgeContent={cart?.reduce((acc, cart) => acc += cart.quantity, 0)} color="primary"
                            onClick={() => navigate('/checkout')}
                            sx={{
                                cursor: 'pointer',
                                '& > svg': {
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }
                            }}
                        >
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                        {
                            !user ?
                                <>
                                    <Button variant='text'
                                        to='/login'
                                        component={Link}
                                    >Sign-In</Button>
                                    <Button
                                        to='/signUp'
                                        component={Link}
                                    >SignUp</Button>
                                </>
                                :
                                <>
                                    {/* <Button
                                        variant='text'
                                        sx={{ color: '#191919' }}
                                        to='/checkout'
                                        component={Link}
                                    >
                                        Checkout
                                    </Button> */}
                                    <Avatar title={user?.displayName} alt="Remy Sharp"
                                        src="https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000" />
                                    <Button onClick={handleLogOut}>
                                        Logout
                                    </Button>
                                </>
                        }
                    </Stack>
                </FlexBox>
            </Container>
        </Box>
    );
};

export default NavBar;