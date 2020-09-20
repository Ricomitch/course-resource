import React from 'react'
import CourseCard from '../components/CourseCard'
import Course from './Course'
import './Courses.css'




export default function Courses(props) {
  
  

  return (
    <div className="home">
    <div className="head"><h2>Course Resource</h2></div>
      
      <div className="subhead">REAL course reviews</div>
        <div className="grid">
          <ul>{CourseCard}</ul>

          {props.courses.map(course => (
            <ul key={course.attributes.id}>
              {course.attributes.name}
              
            </ul>
      ))}
        </div>
      
    </div>
  )
}

