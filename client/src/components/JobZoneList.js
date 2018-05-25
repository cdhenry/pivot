import React from 'react';
import CareerList from './CareerList';

function JobZoneList(props) {
  const jobZones = props.jobZones.map((jobZone) =>
    <div className="card mb-3">
      <h3 className="card-header">{jobZone.title}</h3>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
      </div>

      <div className="card-body">
        <p className="card-text">{jobZone.experience}</p>
        <p className="card-text">{jobZone.education}</p>
        <p className="card-text">{jobZone.job_training}</p>
      </div>
      <div className="container">
        <div className="list-group">
          <CareerList careers={jobZone.careers}/>
        </div>
      </div>
      <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
      <div className="card-footer text-muted">
        2 days ago
      </div>
    </div>
  );

  return(
    <div className="row">
      {jobZones}
    </div>
  )
}

export default JobZoneList;
