import React from 'react';
import CareerList from './CareerList';
import JobZoneHeader from './JobZoneHeader';
import './CareerStyle.css';

const JobZoneList = ({jobZones}) => {
  const renderJobZones = jobZones.map((jobZone, index) =>
    <div key={index+1} id={index+1} className="card mb-3">
      <JobZoneHeader header={jobZone.title} length={jobZone.careers.length}/>

      <div className="card text-white bg-info mb-3 ZoneInfo">
        <div className="card-body">
          <ul>
            <h6><b>Experience:</b></h6>
            <li><h6>{jobZone.experience}</h6></li>
            <h6><b>Education:</b></h6>
            <li><h6>{jobZone.education}</h6></li>
            <h6><b>Training:</b></h6>
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
      {renderJobZones}
    </div>
  )
}

export default JobZoneList;
