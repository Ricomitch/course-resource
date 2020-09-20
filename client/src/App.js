import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import { Login } from './screens/Login';
import { loginUser } from './services/auth';
import { CoursesContainer } from './containers/CoursesContainer';
import CourseContainer from './containers/CourseContainer';


function App() {
  const [currentUser, setCurrentUser] = useState(null) 

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData)
  }

  return (
    <Layout>
      <Switch>
        <Route path='/login'>
          <Login loginSubmit={loginSubmit} />
        </Route>
        {/* <Route path='/register'>
          <component />
        </Route> */}

        <Route exact path='/' component={CoursesContainer} />
        <Route exact path='/courses/:slug' component={CourseContainer} />

      </Switch>
    </Layout>
  );
}

export default App;
