import React, { useState } from 'react'

export const Login = (props) => {
  const [formData, setFormData]= useState({
    email: '',
    password: ''
   })
  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // props.loginSubmit(formData)
    }}>
      <h3>Register</h3>
      <label>Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange} />
      </label>
      <label>Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange} />
      </label>
      <button>Submit</button>

  </form>
  )
}

