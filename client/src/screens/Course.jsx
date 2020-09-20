import React, { useEffect, useState, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import api from '../services/api-config'
import CourseHeader from './CourseHeader'
import ReviewForm from './ReviewForm'

const Course = (props) => {
  const [course, setCourse] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/courses/${slug}`

    api.get(url)
      .then((resp) => {
        setCourse(resp.data)
        setLoaded(true)
      })
      .catch((resp) => console.log(resp))
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    console.log('reviews:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const course_id = course.data.id
    api.post('/reviews', { review, course_id })
      .then(resp => {
        const included = [...course.included, resp.data]
        setCourse({ ...course, included })
        setReview({title: '', description: '', score: 0})
      })
    .catch(resp => {})
  }
  
  const setRating = (score, e) => {
    e.preventDefault()

    debugger
  }

  return (
    <div className='wrapper'>
      {loaded && (
        <Fragment>
          <div className='column'>
            <CourseHeader
              attributes={course.data.attributes}
              reviews={course.included}
            />

            <div className='reviews'></div>
          </div>

          <div className='column'>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={course.data.attributes}
              review={review}
            />
    
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Course
