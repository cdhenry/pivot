import React from 'react';
import image from '../pivot.png'


const Home = () => {
  return (
    <div className="HomePage">
      <h2>Welcome to Pivot</h2>
      <p class="text-info">Created to people find their dream job long-term.</p>
      <img src={image} width="600px"/>
    </div>
  );
};

export default Home;
