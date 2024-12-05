
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import BookComponent from '../Component/BookComponent';

import SignIn from '../Pages/Credental';
import Dashboard from './Component/Dashboard';
import BookDetails  from './Component/BookComponent';
// import MyCartComponent from './Pages/Component/MyCartComponent';

function Router() {
  return (
        <BrowserRouter >
                <Routes>
                    <Route  path="/" element={<SignIn/>} />
                    <Route path="/Dashboard" element={<Dashboard/>} /> 
                    <Route path="/bookdetails/:id" element={<BookDetails/>} /> 
                    {/* <Route path="/Header" element={Header} /> */}
                    {/* <Route path="/NoteOne" element={TakeNoteOne} /> */}
                    {/* <Route path="/NoteTwo" element={<TakeNoteTwo/>} /> */}
                    {/* <Route path="/NoteThree" element={<TakeNoteThree/>} /> */}

                 </Routes>
        </BrowserRouter>
    )
}

export default Router