import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

// icons
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FeatureCard from '../../../Components/FeatureCard/FeatureCard';


const featuresCardData = [
    {
        title: 'Fast delivery',
        description:
            'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
        image: 'https://i.ibb.co/cc8nQbw/adult-blur-blurred-background-687824.png',
        icon: DirectionsBusIcon,
    },
    {
        title: 'A good auto responder',
        description:
            'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
        icon: LocalShippingIcon,
        image: 'https://i.ibb.co/hMBwzGR/chef-cook-food-33614.png',
    },
    {
        image: 'https://i.ibb.co/fxnVgRS/architecture-building-city-2047397.png',
        title: 'Home Delivery',
        description:
            'Red Onion is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.',
        icon: NotificationsActiveIcon,
    },
];

const Features = () => {
    return (
        <Box>
            <Container>
                <Typography variant='h4'>Why choose us?</Typography>
                <Typography
                    variant='body2'
                    sx={{
                        width: '500px',
                        mt: 3,
                    }}
                >
                    Are you hungry? Did you have a long and stressful day? Interested
                    in getting a cheesy pizza delivered to your office or home? Then
                    we are here to help.
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 1fr))',
                        gap: '1rem',
                        justifyItems: 'center',
                        alignItems: 'flex-start',
                        mt: 8,
                    }}
                >
                    {featuresCardData.map((feature, idx) => (
                        <FeatureCard key={idx} feature={feature} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Features;