import { Box, Button, Container, IconButton, Stack } from '@mui/material';
import React from 'react';
import logo from '../../Assets/images/logo2.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FlexBox } from '../StyledComponents/FlexBox';
import { Link } from 'react-router-dom';

const NavBar = () => {
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
                        <Button variant='text'
                            to='/login'
                            component={Link}
                        >Sign-In</Button>
                        <Button
                            to='/signUp'
                            component={Link}
                        >SignUp</Button>
                    </Stack>
                </FlexBox>
            </Container>
        </Box>
    );
};

export default NavBar;