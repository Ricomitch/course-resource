import React from 'react'
import './CourseHeader.css'

const CourseHeader = (props) => {
  const { name, image_url, avg_score } = props.attributes
  const total = props.reviews.length
  return (
    <div className="wrapper">
      <h1><img src={image_url} alt={name}/> {name}</h1>
      <div>
        <div className="totalReviews">{total} User Reviews</div>
        <div className="starRating"></div>
        <div className="totalOutOf">{avg_score} out of 5 stars</div>
      </div>  
      
    </div>
  )
}

export default CourseHeader
