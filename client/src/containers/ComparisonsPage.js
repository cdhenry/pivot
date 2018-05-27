import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComparisons } from '../actions/comparisons';
import ComparisonList from '../components/ComparisonList';
//import ComparisonButtons from '../components/ComparisonButtons';

class ComparisonsPage extends Component {

  componentDidMount(){
    if(this.props.comparisons.length === 0) {
      this.props.fetchComparisons()
    }
  }

  render() {
    const { comparisons } = this.props;

    return (
      <div className="container" align="center">
        <br />
        <div className="jumbotron" id="top">
          <h1 className="display-3">Comparisons</h1>
        </div>
    
        <br />
        <ComparisonList comparisons={comparisons}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {comparisons: state.comparisons.comparisons}
}

export default connect(mapStateToProps, {fetchComparisons})(ComparisonsPage);
