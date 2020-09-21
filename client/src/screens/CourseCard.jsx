import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './CourseHead.css'

const CourseCard = (props) => {
  return (
    <div className="card">
      <div className="course-logo">
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </div>
      <div className="course-name">{props.attributes.name}</div>
      <div className="course-score">{props.attributes.avg_score}</div>
      <div className="course-link">
        <Link to={`/courses/${props.attributes.slug}`}>View Course</Link>
      </div>
      
    </div>
  )
}

export default CourseCard
