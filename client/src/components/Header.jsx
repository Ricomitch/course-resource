import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='nav-text'>
      <h1>Course Resource</h1>
      <Link to='/login'>Login/Register</Link>
      </div>
      
    </header>
  )
}

export default Header
