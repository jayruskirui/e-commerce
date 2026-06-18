import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.svg'
import profile from '../../assets/profile.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="logo" className='nav-logo' />
        <img src={profile} alt= " " />
    </div>
  )
}

export default Navbar