import React, { useState } from 'react'
import useParams from 'react-router-dom'

export default function ReviewEdit(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })
  const { title, description } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  return (
    <form>
      <input name='title' type='text' value={title} onChange={handleChange} />
      <input name='description' type='text' value={description} onChange={handleChange} />
      <button>Submit</button>
      
    </form>
  )
}

