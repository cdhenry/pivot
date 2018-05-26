import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobZones } from '../actions/jobZones';
import JobZoneList from '../components/JobZoneList';
import JobZoneButtons from '../components/JobZoneButtons';
import { bindActionCreators } from 'redux'

class CareersPage extends Component {

  componentDidMount(){
    if(this.props.jobZones.length === 0) {
      this.props.fetchJobZones()
    }
  }

  render() {
    const jobZones = this.props.jobZones
    return (
      <div className="container" align="center">
        <br />
        <div className="jumbotron" id="top">
          <h1 className="display-3">Careers</h1>
        </div>
        <JobZoneButtons />
        <br />
        <JobZoneList jobZones={jobZones}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {jobZones: state.jobZones.jobZones}
}

export default connect(mapStateToProps, {fetchJobZones})(CareersPage);
