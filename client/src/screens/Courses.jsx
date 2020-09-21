import React, { useEffect, useState, Fragment } from 'react'
import CourseCard from './CourseCard'
import api from '../services/api-config';
import Course from './Course'
import './Courses.css'


const Courses = () => {
  const [courses, setCourses] = useState([]);
 
  useEffect(() => {
    api.get('/courses.json')
    .then(resp => {
        setCourses(resp.data.data)
        })
    .catch( resp => console.log(resp) )
  }, [courses.length])

  const grid = courses.map( item => {
    return (
      <CourseCard
        key={item.attributes.name}
        attributes={item.attributes}
      />
    )
  })

  return (
    
    <div className="home">
    <div className="head"><h2>Course Resource</h2></div>
      
      <div className="subhead">REAL course reviews</div>
        <div className="grid">
          {grid}

          {/* {props.courses.map(course => (
            <ul key={course.attributes.id}>
              {course.attributes.name}
              
            </ul>
      ))} */}
        </div>
      
    </div>
    
  )
}

export default Courses

// .then(resp => {
//   setCourses(resp.data.data)
//   })
// .catch( resp => console.log(resp) )
// }, [courses.length])