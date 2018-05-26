import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/CareerStyle.css';

const CareerList = ({careers}) => {
  const renderCareers = careers.map((career) =>
    <Link key={career.id} to={`/careers/${career.id}`} className="btn btn-outline-primary btn-lg" style={{margin:'5px'}}>{career.title}</Link>
  );

  return(
    <div className="row justify-content-md-center">
      {renderCareers}
    </div>
  )
}

export default CareerList;
