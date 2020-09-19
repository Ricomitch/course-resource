import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get('/courses.json')
      .then( resp => console.log(resp) )
      .catch( resp => console.log(resp) )
  }, [courses.length])

  return (
    <div>
      index view
    </div>
  )
}

export default Courses

