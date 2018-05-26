import React from 'react';

const JobZoneHeader = ({header, length}) => {
  const headerArray = header.split(':')

  return(
    <div>
      <h3 className="card-header">
        {headerArray[0]}
        <span style={{float:'right'}}><a href="#top" className="card-link">↑</a></span>
      </h3>
      <div className="card-body">
        <h5 className="card-title">{headerArray[1]}</h5>
        <h6 className="card-subtitle text-muted">({length} Occupations)</h6>
      </div>
    </div>
  )
}

export default JobZoneHeader;
