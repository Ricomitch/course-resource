import React, { Fragment } from 'react'
import styled from 'styled-components'
import Grey from '../components/Stars/Grey'
import Hover from '../components/Stars/Hover'
import Selected from '../components/Stars/Selected'

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size:18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`
const RatingBox = styled.div`
background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input { display: none; 
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Grey}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: .3s;
  }

  input:checked ~ label, input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}"); 
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}"); 
  }
`
const Field = styled.div``
const Wrapper = styled.div`
const SubmitBtn = styled.button`
const Field = styled.div`

const RatingTitle = styled.div``



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
          <RatingContainer>
            <div className="rating-title-text">Rate This Course</div>
            <RatingBox>
              {ratingOptions}
              </RatingBox>
          </RatingContainer>
          </div>
        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm
