import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import { Login } from './screens/Login';
import { loginUser } from './services/auth';
import Courses from './components/Courses';
import Course from './components/Course';


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

        <Route exact path="/" component={Courses} />
        <Route exact path="/course/:slug" component={Course}/>

      </Switch>
    </Layout>
  );
}

export default App;
