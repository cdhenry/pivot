import React from 'react';
import image from '../pivot.png'


const Home = () => {
  return (
    <div className="HomePage">
    <center>
      <br/>
      <h1>Pivot</h1>
      <p>Helping people find their dream job long-term.</p>
      <img src={image} width="400px"/>
    </center>
    </div>
  );
};

export default Home;
