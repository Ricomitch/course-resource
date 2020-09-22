import React, { useEffect, useState, Fragment } from 'react'
import { Route, Switch, useParams, useHistory } from 'react-router-dom'
import api from '../services/api-config'
import CourseHeader from './CourseHeader'
import ReviewForm from './ReviewForm'
import Review from './Review'
import './Course.css'
import { deleteReview } from '../services/reviews'



const Course = (props) => {
  const [course, setCourse] = useState({})
  const [review, setReview] = useState({})
  let [reviews_s, setReviews] = useState([])
  const [loaded, setLoaded] = useState(false)
  let { slug } = useParams()


  useEffect(() => {
    const url = `/courses/${slug}`

    api.get(url)
      .then((resp) => {
        console.log(resp.data)
        setCourse(resp.data)
        console.log('rico',resp.data.included)
        setReviews(resp.data.included)
        setLoaded(true)
      })
      .catch((resp) => console.log(resp))
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }))
    console.log('reviews:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const course_id = course.data.id
    api.post('/reviews', { review, course_id })
      .then(resp => {
        const included = [...course.included, resp.data.data ]
        setCourse({ ...course, included })
        setReview({ title: '', description: '', score: 0 })
      })
      .catch(resp => { })
  }

  const handleDelete = async (id) => {
    console.log('course hd',id)
    await deleteReview(id);
    console.log('new reviews', reviews_s)
    setReviews(prevState => prevState.filter(review => review.id !== id))
    // history.push(`/courses/${slug}`)
    // setReload(!reload)
  }

  
  const setRating = (score, e) => {
    e.preventDefault()

    setReview({ ...review, score })
  }
  

  let reviews
  if (loaded && course.included) {
    reviews = course.included.map((item, index) => {
      console.log('attributes', item.attributes)
      return (
        <Review
          key={index}
          review_id={item.id}
          attributes={item.attributes}
          review={item}
          reviews={reviews}
          handleDelete = {handleDelete}
        />
      )
    })
  }
  return (
    <div className='wrapper'>
      {
        loaded && (
        <Fragment>
          <div className='column'>
          <div className='main'>
            <CourseHeader
              attributes={course.data.attributes}
                  reviews={course.included}
                
            />

            {reviews}
          </div>
          </div>
          <div className='column-2'>
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
