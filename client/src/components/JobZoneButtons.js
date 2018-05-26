import React from 'react';
import '../styles/CareerStyle.css';

const JobZoneButtons = () => {
  return(
    <div className="row justify-content-md-center">
        <a href="#1" className="btn btn-primary btn-sm ZoneButton">Job Zone 1</a>
        <a href="#2" className="btn btn-primary btn-sm ZoneButton">Job Zone 2</a>
        <a href="#3" className="btn btn-primary btn-sm ZoneButton">Job Zone 3</a>
        <a href="#4" className="btn btn-primary btn-sm ZoneButton">Job Zone 4</a>
        <a href="#5" className="btn btn-primary btn-sm ZoneButton">Job Zone 5</a>
    </div>
  )
}

export default JobZoneButtons;
