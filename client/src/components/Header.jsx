import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='nav-text'>
      <h1 className='home-link'><Link to='/'>Course Resource</Link></h1>
      <div className='login-link'><Link to='/login'>Login/Register</Link></div>
      </div>
      
    </header>
  )
}

export default Header
