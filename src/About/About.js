import React from 'react';
import RudyPhoto from './lubeck.png'
import JohnsonPhoto from './IMG_3469.png'
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="rudy-section">
      <h3>Sarah Rudy</h3>
      <img className="rudy-photo" src={ RudyPhoto } alt={"Sarah Rudy"}/>
      <p className="rudy-bio">Bio goes here.</p>
      </div>
      <div className="johnson-section">
      <h3>Anna Johnson</h3>
      <img className="johnson-photo" src={ JohnsonPhoto } alt='Anna Johnson Bio Photo'/>
      <p className="johnson-bio">Bio goes here.</p>
      </div>

    </div>
  )
}

export default About;
