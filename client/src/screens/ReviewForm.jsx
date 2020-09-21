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

  input { 
    display: none; 
    width: 100%;
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
const Field = styled.div`
border-radius: 4px;
input {
  width: 94%;
  min-height:50px;
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  margin: 12px 0;
  padding: 12px;
}

textarea {
  width: 100%;
  min-height:80px;
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  margin: 12px 0;
  padding: 12px;      
}
`
const Wrapper = styled.div`
  background: white;
  padding: 20px;
  background: #000;
  height: 100vh;
  padding-top: 100px ;
`
const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #71b406;
  width:100%;
  margin-top: 20px;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`
const Headline = styled.div`
  font-size: 30px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff
`

const RatingTitle = styled.div`
font-size: 20px;
padding-bottom: 20px;
font-weight: bold;
`



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
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>Have you taken a course at {props.attributes.name}? tell us about it!</Headline>
        <Field>
          <input onChange={props.handleChange}
            value={props.review.title}
            type="text"
            name="title"
            placeholder="Review Title"
          />  
        </Field>
        <Field>
          <input onChange={props.handleChange}
            value={props.review.description}
            type="text"
            name="description"
            placeholder="Review description"
          />  
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle className="rating-title-text">Rate This Course</RatingTitle>
            <RatingBox>
              {ratingOptions}
              </RatingBox>
          </RatingContainer>
          </Field>
        <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
      </form>
    </Wrapper>
  )
}

export default ReviewForm
