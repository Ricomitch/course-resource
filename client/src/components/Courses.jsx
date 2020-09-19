import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
   axios.get('')
  })

  return (
    <div>
      index view
    </div>
  )
}

export default Courses

