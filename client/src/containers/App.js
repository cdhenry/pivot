import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CareersPage from './CareersPage';
import ComparePage from './ComparePage';
import NavBar from '../components/NavBar';
import Home from '../components/Home';

class App extends Component {

  render() {

    return (
      <Router>
        <div className='App'>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/careers" component={CareersPage}/>
        <Route exact path="/compare" component={ComparePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
