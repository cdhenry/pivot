import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCareers } from '../actions/careers';
import PredictorForm from '../components/PredictorForm';
import '../styles/CompareStyle.css';

class NewComparison extends Component {

  constructor(props) {
    super(props);
    this.state = {
      engagement: [],
      altruism: [],
      skill: [],
      support: [],
      basicNeeds: [],
      balance: [],
      careers: []
    };
  }

  componentDidMount(){
    if(this.props.careers.length === 0) {
      this.props.fetchCareers()
    }
  }

  render(){
    const options = this.props.careers.map((career, index) => { return {label: career.title, value: index}})
    return(
      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
          <div className="card-body">
            <h4 className="card-title"><center>Compare Careers</center></h4>
            <p className="card-text"><center>Rate some jobs on the predictors of job satisfaction from one to five.</center></p>
          </div>
        </div>
        <div className="container">
          <form id="compareForm">
            <div className="row justify-content-md-center">
              <table className="TableStyle table-hover">
                <thead>
                  <tr>
                    <th scope="col"><br/>Predictor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-primary">
                    <th scope="row"><br/>Engaging Work</th>
                  </tr>
                  <tr className="table-light">
                    <th scope="row"><br/>Work that helps others</th>
                  </tr>
                  <tr className="table-primary">
                    <th scope="row"><br/>Being good at your job</th>
                  </tr>
                  <tr className="table-light">
                    <th scope="row"><br/>Supportive Colleagues</th>
                  </tr>
                  <tr className="table-primary">
                    <th scope="row"><br/>Basic Needs</th>
                  </tr>
                  <tr className="table-light">
                    <th scope="row"><br/>Fit with rest of life</th>
                  </tr>
                </tbody>
              </table>

              <PredictorForm options={options}/>
              <PredictorForm options={options}/>
              <PredictorForm options={options}/>
            </div>
            <div align="center">
              <input type="submit" className="btn btn-outline-primary" value="Save This Comparison"/>
            </div>
          </form>
        </div>
        <br/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {careers: state.careers.careers}
}

export default connect(mapStateToProps, {fetchCareers})(NewComparison);
