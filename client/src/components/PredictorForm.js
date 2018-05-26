import React from 'react';
import Select from 'react-styled-select';
import '../styles/CompareStyle.css';

class PredictorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      engagement: [],
      altruism: [],
      skill: [],
      support: [],
      basicNeeds: [],
      balance: [],
    };
  }

  render(){
    return(
      <table className="TableStyle table-hover">
          <thead>
            <tr>
              <td>
                <div className="PredictorSelectStyle">
                  <Select
                    options={this.props.options}
                    searchable={true}
                    clearable={true}
                    placeholder={"Select a Job"}
                    classes={{
                      selectValue: 'my-custom-value',
                      selectArrow: 'my-custom-arrow'
                    }}
                  />
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                <input type="range" min="1" max="5"/>
              </td>
            </tr>
            <tr className="table-light">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                <input type="range" min="1" max="5"/>
              </td>
            </tr>
            <tr className="table-primary">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                <input type="range" min="1" max="5"/>
              </td>
            </tr>
            <tr className="table-light">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                <input type="range" min="1" max="5"/>
              </td>
            </tr>
            <tr className="table-primary">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                <input type="range" min="1" max="5"/>
              </td>
            </tr>
            <tr className="table-light">
              <td>
                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5<br/>
                <input type="range" min="1" max="5"/>
              </td>
            </tr>
          </tbody>
      </table>
    )
  }
}

export default PredictorForm;
