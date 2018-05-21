import React from 'react';
import image from '../pivot.png'


const Home = () => {
  return (
    <div className="HomePage">
      <center>
        <br/>
        <h1>Pivot</h1>
        <p>Helping people find their dream job, long-term.</p>
        <img src={image} width="400px"/>
        <br/><br/>
        <small><p>
          *This site incorporates information from<br/>
          <a href="https://services.onetcenter.org/"> O*NET Web Services </a>
          by the U.S. Department of Labor,<br/> Employment and Training
          Administration (USDOL/ETA).<br/>
        </p></small>
      </center>
    </div>
  );
};

export default Home;
