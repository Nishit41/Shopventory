import React from 'react'
import Header from '../Component/Header';
// import MyCartComponent from './Pages/Component/MyCartComponent';
<<<<<<< HEAD
import Books from './Books';
import { Box } from '@mui/material';

function Dashboard() {
  return (
    <Box>
        <Header/>
       <Books/> 
   </Box>
=======
import BookComponent from '../Component/BookComponent';

function Dashboard() {
  return (
    <div>
        <Header/>
       {/* <BookComponent/> */}
   </div>
>>>>>>> 00c33b9e2a91c437811a09d54c293464bb4b0ca6
  )
}

export default Dashboard