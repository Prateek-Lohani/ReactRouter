import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  )
}

export default Routing