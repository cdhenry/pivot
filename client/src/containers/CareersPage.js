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
      <div className="careersContainer" align="center">
      <br />
      <h3><strong>All Careers: </strong></h3><br/>
      <CareerList careers={careers} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {careers: state.careers.careers}
}

export default connect(mapStateToProps, {fetchCareers})(CareersPage);
