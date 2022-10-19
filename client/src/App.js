import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sidebar />}></Route>
        {/* <Route path='/' element={<Home />}></Route> */}
        {/* <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
