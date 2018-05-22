import React from 'react';


function CareerList(props) {
  const careers = props.careers.map((career) =>
    <div className="col-lg-4">
      <div className="card bg-light mb-3">
        <div className="card-header">{career.title}</div>
        <div className="card-body">
        </div>
      </div>
    </div>
  );

  return(
    <div className="row">
      {careers}
    </div>
  )
}

export default CareerList;
