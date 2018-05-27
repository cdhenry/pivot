import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CareersPage from './CareersPage';
import CareerPage from './CareerPage';
import ComparePage from './ComparePage';
import ComparisonShow from '../components/ComparisonShow';
import ComparisonsPage from './ComparisonsPage';
import NavBar from '../components/NavBar';
import Home from '../components/Home';

class App extends Component {
  render() {

    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Switch>
            <Route path="/careers/:careerId" component={CareerPage}/>
            <Route path="/careers" component={CareersPage}/>
          </Switch>
          <Route path="/compare" component={ComparePage}/>
          <Switch>
            <Route path="/comparisons/:comparisonId" component={ComparisonShow}/>
            <Route path="/comparisons" component={ComparisonsPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
