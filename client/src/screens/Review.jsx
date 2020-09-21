import React from 'react'
import Rating from '../../src/components/Rating'
import './Review.css'

const Review = (props) => {
  const { score, title, description } = props.attributes
  return (
    <div>
      <div className="card">
        <div className="rating-container">
          <Rating score={score}/>
      </div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        {/* <button>Edit</button> */}
        <button>Delete</button>
      </div>
    </div>
  )
}
export default Review
