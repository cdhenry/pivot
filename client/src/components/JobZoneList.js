import React from 'react';
import CareerList from './CareerList';
import JobZoneHeader from './JobZoneHeader';
import './CareerStyle.css';

function JobZoneList(props) {
  const jobZones = props.jobZones.map((jobZone, index) =>
    <div className="card mb-3" id={index+1}>
      <JobZoneHeader header={jobZone.title} length={jobZone.careers.length}/>

      <div className="card text-white bg-info mb-3 ZoneInfo">
        <div className="card-body">
          <ul>
            <h6>Experience:</h6>
            <li><h6>{jobZone.experience}</h6></li>
            <h6>Education:</h6>
            <li><h6>{jobZone.education}</h6></li>
            <h6>Training:</h6>
            <li><h6>{jobZone.job_training}</h6></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="list-group">
          <CareerList careers={jobZone.careers}/>
        </div>
      </div>

      <div className="card-body">
        <a href="#top" className="card-link">Back to the Top</a>
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
