import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import OnionTextField from '../../../Components/Custom/OnionTextField';
import { useAuth } from '../../../Hooks/useAuth';
import AuthForm from './SignUp.style';

const SignUP = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const { registerWithEmailAndPassword } = useAuth()
    const navigate = useNavigate()

    const handleRegister = async ({ name, email, password }) => {
        await registerWithEmailAndPassword(name, email, password, navigate)
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
                <AuthForm component='form' onSubmit={handleSubmit(handleRegister)}>
                    <Typography variant='h4' color='primary' textAlign='center'>
                        Sign Up
                    </Typography>
                    <OnionTextField
                        placeholder='Name'
                        type='text'
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                        })}
                        error={errors.name}
                        helperText={errors.name && errors.name.message}
                    />
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
                        to='/login'
                        style={{
                            color: '#f91944',
                        }}
                    >
                        Already have an account?
                    </Link>
                    <Button
                        sx={{
                            borderRadius: '8px',
                        }}
                        type='submit'
                    >
                        Sign Up
                    </Button>
                </AuthForm>
            </Container>
        </Box>
    );
};

export default SignUP;