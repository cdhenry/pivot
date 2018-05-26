import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CareersPage from './CareersPage';
import ComparePage from './ComparePage';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import CareerShow from '../components/CareerShow';

class App extends Component {
  render() {

    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Switch>
            <Route path="/careers/:careerId" component={CareerShow}/>
            <Route path="/careers" component={CareersPage}/>
          </Switch>
          <Route path="/compare" component={ComparePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
