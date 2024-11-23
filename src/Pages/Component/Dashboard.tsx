import React from 'react'
import Header from '../Component/Header';
// import MyCartComponent from './Pages/Component/MyCartComponent';
import Books from './Books';
import { Box } from '@mui/material';

function Dashboard() {
  return (
    <Box>
        <Header/>
       <Books/> 
   </Box>
  )
}

export default Dashboard