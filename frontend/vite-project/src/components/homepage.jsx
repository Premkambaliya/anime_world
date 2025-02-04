import React from 'react';
import download from '../assets/download.svg'
import search from '../assets/search.svg';
import save from '../assets/save.svg';
import profile from '../assets/profile.svg';
import A1 from '../assets/sololeveling.png';
import A2 from '../assets/i got1.png';
import A3 from '../assets/classroom.png';
import A4 from '../assets/yourname1.png';
import A5 from '../assets/dayswith1.png';
import A6 from '../assets/horimiya1.png';
import A7 from '../assets/bluelock.png';
import A8 from '../assets/demonslayer.png';
import A9 from '../assets/viralhit.png';
import A10 from '../assets/haikyu.png';
import feature from '../assets/feature.png';
import makima from '../assets/makima.png';
import backgroundphoto from '../assets/backgroundphoto.png';

import './homepage.css';

const BeTheFirstToWatch = () => {
  return (
    <div className="container">

      <nav className="navbar">
        <img src={search} alt="Search" className="nav-icon" />
        <img src={download} alt="Download" className="nav-icon" />
        <img src={save} alt="Save" className="nav-icon" />
        <img src={profile} alt="Profile" className="nav-icon" />
      </nav>

      <img className='backgroundphoto' src={backgroundphoto} alt="" />

      <div className='slidediv'>
        <div className='slide1'>
          <img className='slide' src={A1} alt="" />
        </div>
        <div className='slide1'>
          <img className='slide' src={A2} alt="" />
        </div>
        <div className='slide1'>
          <img className='slide' src={A3} alt="" />
        </div>
        <div className='slide1'>
          <img className='slide' src={A4} alt="" />
        </div>
        <div className='slide1'>
          <img className='slide' src={A5} alt="" />
        </div>
        <div className='slide1'>
          <img className='slide' src={A6} alt="" />
        </div>
        <div className='slide1'>
          <img className='slide' src={A7} alt="" />
        </div>
        <div className='slide1'>
          <img className='slide' src={A8} alt="" />
        </div>
        <div className='slide1'>
          <img className='slide' src={A9} alt="" />
        </div>
        <div className='slide1'>
          <img className='slide' src={A10} alt="" />
        </div>
      </div>



      <h1 className="title">Be the First to Watch</h1>

      <div className='featureandmakima'>
        <div>
          <img src={feature} alt="" />
        </div>
        <div>
          <img src={makima} alt="" />
        </div>
      </div>



      {/* <p className="description">
        Sign up to get notified when new content is released.
      </p> */}
      {/* <form className="form">
        <input type="email" placeholder="Enter your email" className="input" />
        <button type="submit" className="button">Notify Me</button>
      </form> */}
    </div>
  );
};

export default BeTheFirstToWatch;
