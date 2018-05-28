import React from 'react';
import '../styles/CareerStyle.css';

const CareerShow  = ({career}) => {
  var whatTheyDo, onTheJob, aka
  if (career.length !== 0){
    whatTheyDo = career.what_they_do.split(".").map((descriptor) =>
      <div className="list-group-item list-group-item-action">{descriptor}</div>
    )

    aka = career.aka.split(",").map((aka) =>
      <div className="list-group-item list-group-item-action">{aka}</div>
    )

    onTheJob = career.on_the_job.split(".").map((responsibility) =>
      <div className="list-group-item list-group-item-action">{responsibility}</div>
    )
  }

  return(
    <div className="container" align="center">
      <br/>
      <div className="card border-primary mb-3">
        <div className="card-body">
          <div className="card border-primary">
            <div className="card-body">
              <h4 className="card-title">{career.title}</h4>
              <p className="list-group">{whatTheyDo}</p>
            </div>
          </div>
          <br/>
          <div className="card border-primary">
            <div className="card-body">
              <div className="card border-primary CareerListWidth" style={{float: 'left'}}>
                <div className="card-body">
                  <h4 className="card-title">AKA</h4>
                  <p className="text-left list-group">{aka}</p>
                </div>
              </div>
              <div className="card border-primary CareerListWidth" style={{float: 'right'}}>
                <div className="card-body">
                  <h4 className="card-title">Tags</h4>
                  <div className="list-group">
                    <p className="text-left list-group-item list-group-item-action">
                      Apprenticeship: {career.apprenticeship ? 'Yes' : 'No'}
                    </p>
                    <p className="text-left list-group-item list-group-item-action">
                      Bright Outlook: {career.bright_outlook ? 'Yes' : 'No'}
                    </p>
                    <p className="text-left list-group-item list-group-item-action">
                      Green Job: {career.green ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="card border-primary">
            <div className="card-body">
              <h4 className="card-title">On The Job</h4>
              <p className="text-left list-group">{onTheJob}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerShow;
