import React from 'react';
import Select from 'react-styled-select';
import '../styles/CompareStyle.css';

class PredictorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      engagement: 5,
      altruism: 5,
      skill: 5,
      support: 5,
      basic_needs: 5,
      balance: 5,
      career_id: 0
    };
    this.baseState = this.state
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.valueAsNumber
    })
  }

  handleCareerChange = event => {
    this.setState({
      career_id: event + 1
    })
  }

  render(){
    return(
      <table className="TableStyle table-hover PredictorForm">
          <thead>
            <tr>
              <td>
                <div className="PredictorSelectStyle">
                  <Select
                    options={this.props.options}
                    searchable={true}
                    clearable={true}
                    placeholder={"Select a Job"}
                    onChange={this.handleCareerChange}
                    classes={{
                      selectValue: 'predictorInput',
                    }}
                  />
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
                <br/>
                <input
                  className="predictorInput"
                  type="range"
                  min="1"
                  max="5"
                  name="engagement"
                  onInput={this.handleChange}
                />
              </td>
            </tr>
            <tr className="table-light">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
                <br/>
                <input
                  className="predictorInput"
                  type="range"
                  min="1"
                  max="5"
                  name="altruism"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr className="table-primary">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
                <br/>
                <input
                  className="predictorInput"
                  type="range"
                  min="1"
                  max="5"
                  name="skill"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr className="table-light">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
                <br/>
                <input
                  className="predictorInput"
                  type="range"
                  min="1"
                  max="5"
                  name="support"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr className="table-primary">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
                <br/>
                <input
                  className="predictorInput"
                  type="range"
                  min="1"
                  max="5"
                  name="basic_needs"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr className="table-light">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
                <br/>
                <input
                  className="predictorInput"
                  type="range"
                  min="1"
                  max="5"
                  name="balance"
                  onChange={this.handleChange}/>
              </td>
            </tr>
          </tbody>
      </table>
    )
  }
}

export default PredictorForm;
