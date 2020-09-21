import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import './Review.css'
import ReviewEdit from './ReviewEdit'

const Review = (props) => {
  const { id, attributes } = props.review
  const { score, title, description } = attributes
  return (
    <div>
      <div className="card">
        <div className="rating-container">
          <Rating score={score}/>
      </div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <Link to={`/reviews/${id}/edit`}>Edit</Link>
        <button>Delete</button>
      </div>
    </div>
  )
}
export default Review
