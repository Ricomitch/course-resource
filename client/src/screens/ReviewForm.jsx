import React, { Fragment } from 'react'

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return(
    <Fragment>
        <input type="radio" value={score} checked={props.review.score == score}name="rating" onChange={() => console.log('seleted:', score)} id={`rating-${score}`} />
      <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })
  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>Have you taken a course at {props.attributes.name}? tell us about it!</div>
        <div className="field">
          <input onChange={props.handleChange}
            value={props.review.title}
            type="text"
            name="title"
            placeholder="Review Title"
          />  
        </div>
        <div className="field">
          <input onChange={props.handleChange}
            value={props.review.description}
            type="text"
            name="description"
            placeholder="Review description"
          />  
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate This Course</div>
            <div className="rating-box">
              {ratingOptions}
              </div>
          </div>
          
        </div>
        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm
