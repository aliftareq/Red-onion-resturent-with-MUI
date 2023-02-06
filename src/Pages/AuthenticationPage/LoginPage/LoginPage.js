import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import OnionTextField from '../../../Components/Custom/OnionTextField';
import { useAuth } from '../../../Hooks/useAuth';
import AuthForm from '../SignUpPage/SignUp.style';

const LoginPage = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const { loginWithEmailAndPassword } = useAuth()

    //navigation
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = async ({ name, email, password }) => {
        await loginWithEmailAndPassword(email, password, location, navigate)
        reset()
    }
    console.log({ errors });
    return (
        <Box
            sx={{
                height: '90vh',
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container>
                <AuthForm component='form' onSubmit={handleSubmit(handleLogin)}>
                    <Typography variant='h4' color='primary' textAlign='center'>
                        Log In
                    </Typography>
                    <OnionTextField
                        placeholder='Email'
                        type='email'
                        {...register('email', {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',
                            },
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                        })}
                        error={errors.email}
                        helperText={errors.email && errors.email.message}
                    />
                    <OnionTextField
                        placeholder='Password'
                        type='password'
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Please input a password',
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long',
                            },
                        })}
                        error={errors.password}
                        helperText={errors.password && errors.password.message}
                    />
                    <Link
                        to='/signUp'
                        style={{
                            color: '#f91944',
                        }}
                    >
                        New to this website?
                    </Link>
                    <Button
                        sx={{
                            borderRadius: '8px',
                        }}
                        type='submit'
                    >
                        Log In
                    </Button>
                </AuthForm>
            </Container>
        </Box>
    );
};

export default LoginPage;