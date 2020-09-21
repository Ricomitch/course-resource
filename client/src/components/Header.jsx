import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='nav-text'>
      <h1>Course Resource</h1>
      <div className='login-link'><Link to='/login'>Login/Register</Link></div>
      </div>
      
    </header>
  )
}

export default Header
