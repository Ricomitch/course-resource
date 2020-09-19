import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Course Resource</h1>
      <Link to='/login'>Login/Register</Link>
    </header>
  )
}

export default Header
