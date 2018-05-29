import React from 'react';
import '../styles/CareerStyle.css';

const CareerList = ({careers}) => {
  const renderCareers = careers.map((career) =>
    <a href={`/careers/${career.id}`} className="btn btn-outline-primary btn-lg"
      key={career.id} style={{margin:'5px'}}>{career.title}</a>
  );

  return(
    <div className="row justify-content-md-center">
      {renderCareers}
    </div>
  )
}

export default CareerList;
