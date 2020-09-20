
import React from 'react'

export default function Courses(props) {
  

  return (
    <div>
      {props.courses.map(course => (
        <p key={course.attributes.id}>{course.attributes.name}</p>
      ))}
    </div>
  )
}

