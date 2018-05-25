import React from 'react';
import { fetchCareers } from '../actions/careers';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ComparePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      engagement: '',
      altruism: '',
      skill: '',
      support: '',
      basic_needs: '',
      balance: '',
      careers: []
    };
  }

  componentDidMount(){
    fetch('/api/careers')
      .then((response) => response.json())
      .then((responseJSON) => this.setState({careers: responseJSON}))
  }

  render(){
    const options = this.state.careers.map((career) => career.title)
    return(
      <div className="container">
      <br/>
      <div className="card border-primary mb-3">
        <div className="card-body">
          <h4 className="card-title"><center>Compare Careers</center></h4>
          <p className="card-text"><center>Rate some jobs on the predictors of job satisfaction from one to five.</center></p>
        </div>
      </div>
        <form id="compareForm">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Predictor</th>
                <th scope="col">
                  <Select
                      name="university"
                      value="one"
                      options={options}
                      onChange={val => console.log(val)}
                  />
                </th>
                <th scope="col"><input type="select" placeholder="Job 2"/></th>
                <th scope="col"><input type="select" placeholder="Job 3"/></th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-primary">
                <th scope="row">Engaging Work</th>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/>
                </td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
              </tr>
              <tr className="table-light">
                <th scope="row">Work that helps others</th>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
              </tr>
              <tr className="table-primary">
                <th scope="row">Being good at your job</th>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
              </tr>
              <tr className="table-light">
                <th scope="row">Supportive colleagues</th>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
              </tr>
              <tr className="table-primary">
                <th scope="row">Basic needs</th>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
              </tr>
              <tr className="table-light">
                <th scope="row">Fit with rest of life</th>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
                <td>
                  1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                  <input type="range" min="1" max="5"/></td>
              </tr>
            </tbody>
          </table>
          <div align="center">
            <button type="button" className="btn btn-outline-primary">Save This Comparison</button>
          </div>
        </form>
        <br/>
      </div>
    )
  }
}

export default ComparePage;
