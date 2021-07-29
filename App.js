import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Destinations from './components/Destinations';


function App() {
  return (
    <Router>
      <Header />

      <Route exact path='/'>
        <Showcase />
        <Destinations />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/sign-up'>
        <SignUp />
      </Route>

      <Footer />
    </Router>
  );
}

export default App;
