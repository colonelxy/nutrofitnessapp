import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo2.png';


const Navbar = () => {
  return (
    <Stack  direction='row'
    justifyContent='space-around'
    sx={{ gap: {
      sm: '122px', xs: '48px'
    }, mt: {
      sm: '32px', xs: '20px'
    }, justifyContent: 'none'}} px='20px'
    >
      <Link to='/'>
        <img src={Logo} alt='Nutrofitness logo' style={{
          width: '150px', height: '150px', margin: '0, 0px' }}
          />
      </Link>
      <Stack  direction='row'
        gap='48px'
        fontSize='24px'
        alignItems='flex-end'>
       
        <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #ff2625'}}>Home</Link>
          <a href='#exercises' style={{textDecoration: 'none', color: '#3A11212'}}>Exercises</a>
       
      </Stack>
    </Stack>
  )
}

export default Navbar