import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CareersPage from './CareersPage';
import CareerPage from './CareerPage';
import IndexComparison from './IndexComparison';
import NewComparison from './NewComparison';
import EditComparison from './EditComparison';
import SuccessComparison from '../components/SuccessComparison'
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
          <Switch>
            <Route path="/comparisons/:comparisonId/edit" component={EditComparison}/>
            <Route path="/comparisons/new" component={NewComparison}/>
            <Route path="/comparisons/success" component={SuccessComparison}/>
            <Route path="/comparisons" component={IndexComparison}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
