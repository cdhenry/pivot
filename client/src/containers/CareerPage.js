import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCareer } from '../actions/career';

class CareerPage extends Component {

  componentDidMount(){
    debugger;
    if(this.props.career.length === 0) {
      this.props.fetchCareer(this.props.match.params.careerId)
    }
  }

  render() {
    const { career } = this.props;

    return (
      <div className="container" align="center">
        {career}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {career: state.career.career}
}

export default connect(mapStateToProps, {fetchCareer})(CareerPage);

// ({ career }) =>
//   <div>
//     <h2>{career.title}</h2>
//   </div>;
//
// const mapStateToProps = (state, ownProps) => {
//   debugger;
//   fetchCareer(ownProps.match.params.careerId)
//   const career = state.careers.careers.find(career => career.id === +ownProps.match.params.careerId)
//
//   if (career) {
//     return { career }
//   } else {
//     return { career: {} }
//   }
// };
//
// export default connect(mapStateToProps)(CareerShow);
