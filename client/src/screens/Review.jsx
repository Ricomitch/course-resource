import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import './Review.css'
import ReviewEdit from './ReviewEdit'

const Review = (props) => {
  const { attributes } = props
  const { score, title, description } = attributes
  const { handleDelete, reviews} = props
  const [review, setReview] = useState(null)
  const { id } = useParams()
  return (
    <div>
      <div className="card">
        <div className="rating-container">
          <Rating score={score}/>
      </div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <Link to={`/reviews/${props.review_id}/edit`}>Edit</Link>
        <Link><button onClick={() => handleDelete(props.review_id)}>Delete</button></Link>
      </div>
    </div>
  )
}
export default Review
