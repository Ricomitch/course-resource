import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, useParams } from 'react-router-dom';
import Layout from './layouts/Layout';
import { Login } from './screens/Login';
import { loginUser } from './services/auth';
import { CoursesContainer } from './containers/CoursesContainer';
import CourseContainer from './containers/CourseContainer';
import Course from './screens/Course';
import Courses from './screens/Courses';
import ReviewEdit from './screens/ReviewEdit';
import { getAllReviews, putReview } from './services/reviews';


function App() {
  const [currentUser, setCurrentUser] = useState(null) 
  const [reviews, setReviews] = useState([]);
  
  
  useEffect(() => {
    const fetchReviews = async () => {
      const reviewArray = await getAllReviews();
      setReviews(reviewArray);
    }
    
    fetchReviews();
  }, [])


  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData)
  }

  const updateSubmit = async (id, formData) => {
    const updatedReview = await putReview(id, formData);
    setReviews(prevState => prevState.map(review => review.id === Number(id) ? updatedReview : review));
  }

 
  
  return (
    <Layout>
      <Switch>
        

        <Route exact path='/reviews/:id/edit'>
          <ReviewEdit
        updateSubmit={updateSubmit} reviews={reviews}/> 
        </Route>
        <Route path='/login'>
          <Login loginSubmit={loginSubmit} />
        </Route>
        {/* <Route path='/register'>
          <component />
        </Route> */}

        <Route exact path='/' component={Courses} />
        <Route exact path='/courses/:slug' render={() =>
        <Course
        reviews={reviews} />
        }/>
        
        

        {/* <reviews
          reviews={reviews}
          // handleDelete={handleDelete}
          // currentUser={currentUser}
        /> */}
      </Switch>
    </Layout>
  );
}

export default App;
