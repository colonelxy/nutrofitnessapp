import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    // make website responsive on larger devices with the sx below
    // The Home path '/' is like the root, the begining
    // The :id aspect  in route exercise path makes this a dynamic path where :id can be : 1,2,3 etc
    <Box width='400px' sx={{ width: {x1: '1488px' }}} m='auto'>
        <Navbar />
        <Routes>
    
           <Route  path='/' element={<Home />}/> 
    
           <Route path='/exercise/:id' element={< ExerciseDetail />}/>
        </Routes>
        <Footer />
    </Box>
  )
}

export default App