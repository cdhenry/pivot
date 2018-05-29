import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCareer } from '../actions/careers';
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
      <div>
        <CareerShow career={career}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {career: state.careers.career}
}

export default connect(mapStateToProps, {fetchCareer})(CareerPage);
