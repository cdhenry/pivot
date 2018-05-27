import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCareer } from '../actions/career';
import CareerShow from '../components/CareerShow';

class CareerPage extends Component {

  componentDidMount(){
    if(this.props.career.length === 0) {
      this.props.fetchCareer(this.props.match.params.careerId)
    }
  }

  render() {
    const { career } = this.props;

    return (
      <div className="container" align="center">
        {career.title}, {career.aka}, {career.on_the_job}, {career.what_they_do}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {career: state.career.career}
}

export default connect(mapStateToProps, {fetchCareer})(CareerPage);
