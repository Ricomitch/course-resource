import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getOneReview } from '../services/reviews';
import './ReviewEdit.css'



export default function ReviewEdit(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })
  const { title, description } = formData;
  const { id } = useParams();
  const { reviews, updateSubmit } = props;
  console.log(props)
  useEffect(() => {
    const preFillFormData = () => {
      const oneReview = reviews.find(review => {
        return review.id === Number(id);
      })
      const { title, description } = oneReview;
      setFormData({ title, description });
    }
    if (reviews.length) {
      preFillFormData()
    }
  }, [reviews, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
      updateSubmit(id, formData)
    }}>
      <input name='title' type='text' value={title} onChange={handleChange} />
      <input name='description' type='text' value={description} onChange={handleChange} />
      <button>Submit</button>
      
    </form>
  )
}

