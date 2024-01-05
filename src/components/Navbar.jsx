import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Routing from '../utils/Routing'


const Navbar = () => {
  return (
    <>    <nav className='h-16 w-full bg-blue-950 font-semibold text-white flex justify-center items-center gap-20'>
        <NavLink style={({isActive})=>({color:isActive?"red":"white"})}  to="/">Home</NavLink>
        <NavLink style={({isActive})=>({color:isActive?"red":"white"})} to="/services">Services</NavLink>
        <NavLink style={({isActive})=>({color:isActive?"red":"white"})} to="/contact">Contact</NavLink>
        <NavLink style={({isActive})=>({color:isActive?"red":"white"})} to="/users">Users</NavLink>
    </nav>
    <Routing/>
    </>

  )
}

export default Navbar