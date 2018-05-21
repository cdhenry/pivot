import React from 'react';

function CareerList(props) {
  const careers = props.careers.map((career) =>
    <div key={career.id}>
      <h3>{career.title}</h3>
    </div>
  );

  return(
    <div>
      {careers}
    </div>
  )
}

export default CareerList;
