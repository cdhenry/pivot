import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCareers } from '../actions/careers';
import CareerList from '../components/CareerList';
import { bindActionCreators } from 'redux'

class CareersPage extends Component {

  componentDidMount(){
    if(this.props.careers.length === 0) {
     this.props.fetchCareers()
   }
  }

  render() {
    const careers = this.props.careers

    return (
      <div className="container" align="center">
        <br />
        <div className="jumbotron">
          <h1 className="display-3">Careers</h1>
        </div>

        <br />
        <CareerList careers={careers}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {careers: state.careers.careers}
}

export default connect(mapStateToProps, {fetchCareers})(CareersPage);
