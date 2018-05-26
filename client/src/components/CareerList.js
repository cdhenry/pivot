import React from 'react';
import {Link} from 'react-router-dom';
import './CareerStyle.css';

function CareerList(props) {
  const careers = props.careers.map((career) =>
    <a href="#" className="btn btn-outline-primary btn-lg" style={{margin:'5px'}}>{career.title}</a>
  );

  return(
    <div className="row justify-content-md-center">
      {careers}
    </div>
  )
}

export default CareerList;
