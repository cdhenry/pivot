import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router'
import { fetchCareers } from '../actions/careers';
import { addComparison } from '../actions/comparisons';
import PredictorForm from '../components/PredictorForm';
import '../styles/CompareStyle.css';

class NewComparison extends Component {

  constructor(props){
    super(props);

    this.state = {
      fireRedirect: false
    };
  }

  componentDidMount(){
    if(this.props.careers.length === 0) {
      this.props.fetchCareers()
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const comparison = {predictors_attributes:[
      {career_id: 0, engagement: 0, altruism: 0, skill: 0, support: 0, basic_needs: 0, balance: 0},
      {career_id: 0, engagement: 0, altruism: 0, skill: 0, support: 0, basic_needs: 0, balance: 0},
      {career_id: 0, engagement: 0, altruism: 0, skill: 0, support: 0, basic_needs: 0, balance: 0}
    ]}

    const predictors = document.getElementsByClassName("PredictorForm")
    Array.prototype.forEach.call(predictors, function(predictorsElem, index) {
      const predictorInputs = predictorsElem.getElementsByClassName("predictorInput")
      Array.prototype.forEach.call(predictorInputs, function(inputElem) {
        if(inputElem.attributes.value){
          comparison["predictors_attributes"][index]["career_id"] = parseInt(inputElem.attributes.value.value) + 1
        }else{
          comparison["predictors_attributes"][index][inputElem.name] = parseInt(inputElem.value);
        }
      });
    });

    this.props.addComparison(comparison);
    alert("This Comparison Has Been Saved!")
    this.setState({ fireRedirect: true })
  }

  render(){
    const options = this.props.careers.map((career, index) => {
      return {label: career.title, value: index}
    })
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state

    return(
      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
          <div className="card-body">
            <h4 className="card-title"><center>Compare Careers</center></h4>
            <p className="card-text"><center>
              Rate some jobs on the predictors of job satisfaction from one to
              five.
            </center></p>
          </div>
        </div>
        <div className="container">
          <form id="compareForm" onSubmit={(event) => this.handleSubmit(event)}>
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
        {fireRedirect && (
          <Redirect to={from || '/comparisons/success'}/>
        )}
        <br/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {careers: state.careers.careers}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addComparison: addComparison,
    fetchCareers: fetchCareers
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComparison)

// }else if (/[A-Z]/.test(inputElem.name)){
//   debugger;
//   const name = inputElem.name
//   const capital = name.search(/[A-Z]/)
//   const lowercasedChar = name[capital].toLowerCase()
//   const rubyName = [name.slice(0, capital), "_", `${lowercasedChar}`, name.slice(capital+1)].join('');
//   comparison["predictors_attributes"][index][rubyName] = parseInt(inputElem.value);
