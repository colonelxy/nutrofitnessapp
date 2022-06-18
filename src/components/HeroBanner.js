import React from 'react';


import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/manGym.jpg';
import { padding } from '@mui/system';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'}, 
      ml: { sm: '50px'}
    }} position= 'relative' p='20px'>
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Nutrofitness
      </Typography>
      <Typography fontWeight= {700}
      sx={{fontSize: { lg: '44px', xs: '40px'}}}
      mb= '23px' mt='30px'>
        Sweat, Smile, <br />  Repeat
      </Typography>
      <Typography fontSize='22px'
      lineHeight= '35px' mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant= 'contained' color= 'error' href='#Exercises' sx={{backgroundColor: '#ff2625', padding: '10px'}}>
        Explore Exercises
      </Button>
      <Typography fontWeight={600} color = '#ff2625'
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}
      }}
      fontSize ='200px'>
        Exercises
      </Typography>
      <img src={HeroBannerImage}  alt='banner' className='hero-banner-img' style={{width: '758px', height: '900px'}}/>
    </Box>
  )
}

export default HeroBanner