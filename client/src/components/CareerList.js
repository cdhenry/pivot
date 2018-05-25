import React from 'react';
import './CareerList.css';

function CareerList(props) {
  const careers = props.careers.map((career) =>
    <div className="card border-primary mb-3 col-md-auto CareerStyle">
      <div className="card-body">
        <p className="card-text">{career.title}</p>
      </div>
    </div>
  );

  return(
    <div className="row justify-content-md-center">
      {careers}
    </div>
  )
}

export default CareerList;
