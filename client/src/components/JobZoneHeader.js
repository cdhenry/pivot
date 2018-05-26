import React from 'react';

function JobZoneHeader(props) {
  const header = props.header.split(':')

  return(
    <div>
      <h3 className="card-header">
        {header[0]}
        <span style={{float:'right'}}><a href="#top" className="card-link">↑</a></span>
      </h3>
      <div className="card-body">
        <h5 className="card-title">{header[1]}</h5>
        <h6 className="card-subtitle text-muted">({props.length} Occupations)</h6>
      </div>
    </div>
  )
}

export default JobZoneHeader;
