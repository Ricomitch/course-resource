import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Course from '../screens/Course';
import api from '../services/api-config';



const CourseContainer = (props) => {
  const [course, setCourse] = useState([]);
  const [review, setReview] = useState([])

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/courses/${slug}`
    
    api.get(url)
      .then( resp => console.log(resp))
      .catch( resp => console.log(resp) )
    

  }, [])

  return (
    <Switch>
      <Route path='/courses/:slug'>
        <Course
          course={course}
          />
    </Route>
    </Switch>
  )
}

export default CourseContainer

