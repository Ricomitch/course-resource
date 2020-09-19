import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import { Login } from './screens/Login';

function App() {
  const [currentUser, setCurrentUser] = useState(null) 

  const loginSubmit = () => {
    
  }

  return (
    <Layout>
      <Switch>
        <Route path='/login'>
        <Login />
        </Route>
        {/* <Route path='/register'>
          <component />
        </Route> */}

        {/* <Route exact path="/" component={Courses} />
        <Route exact path="/course/:slug" component={Course}/> */}

      </Switch>
    </Layout>
  );
}

export default App;
