import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import Users from '../components/Users'
import UserDetail from '../components/UserDetail'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/users' element={<Users/>}>
        <Route path='/users/:name' element={<UserDetail/>}/>

        </Route>
        
        
        {/* <Route path='/users' element={<Users/>}/>
        <Route path='/users/:name' element={<UserDetail/>}/> */}
    </Routes>
  )
}

export default Routing