import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import api from '../services/api-config';
import CourseHeader from './CourseHeader'



const Course = (props) => {
  const [course, setCourse] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/courses/${slug}`
    
    api.get(url)
      .then(resp => {
        setCourse(resp.data)
        setLoaded(true)
      })
      .catch( resp => console.log(resp) )
    

  }, [])

  return (
      <div className="wrapper">
      <div className="column">
        {
          loaded &&
          <CourseHeader
            attributes={course.data.attributes}
            reviews={course.included}
          />
        }
      <div className="reviews"></div>
      </div>
      
      
      <div className="column">
        <div className="review-form">review form is here</div>
      </div>
    </div>
  )
}

export default Course
