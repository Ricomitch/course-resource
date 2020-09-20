import React from 'react'

const ReviewForm = (props) => {
  return (
    <div className="wrapper">
      <form>
        <div>Have you taken a course at [course name]? tell us about it!</div>
        <div className="field">
          <input
            type="text"
            name="title"
            placeholder="Review Title"
          />  
        </div>
        <div className="field">
          <input
            type="text"
            name="description"
            placeholder="Review description"
          />  
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate This Course</div>
            {/* [star rating here] */}
          </div>
          
        </div>
        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm
