import React from 'react';

class PredictorForm extends React.Compenent {
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
      <div>
        <form id="predictorForm">
        </form>
      </div>
    )
  }
}

export default PredictorForm;
