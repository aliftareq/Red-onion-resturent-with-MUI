import { Avatar, Box, Button, Container, IconButton, Stack } from '@mui/material';
import React from 'react';
import logo from '../../Assets/images/logo2.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FlexBox } from '../StyledComponents/FlexBox';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

const NavBar = () => {
    const { user, logoutUser } = useAuth()
    console.log(user);
    const navigate = useNavigate()

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
                        <IconButton>
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
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