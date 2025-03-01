import Switch from '@mui/material/Switch';
import * as React from 'react';
import './About.css';
import ufo from '../images/ufo.png'
import trail from '../images/contact/trailhead.png';
import github from '../images/contact/github.png';
import linkedin from '../images/contact/linkedin.png';

const label = { inputProps: { 'aria-label': 'Switch' } };

const About = () => {

  const [isLightOn, setLightOn] = React.useState(false);

  const toggleLight =()=>{
    setLightOn(!isLightOn);
  };

    return ( 
      <div id="about" className="About-outer">
        <h1>About Me!</h1>
        <div className="lights-cntr">
          <div className="l1">
            <img className='ufo' src={ufo} alt='ufo'></img>
            <div className={`yellow-light ${isLightOn ? 'visible' : ''}`}></div>
          </div>
          <div className="myimg2"></div>
          <div className="lightswitch">
            <Switch {...label} checked={isLightOn} onChange={toggleLight}/>
          </div>
          <div className="l1">
          <img src={ufo} alt='ufo'></img>
          <div className={`yellow-light ${isLightOn ? 'visible' : ''}`}></div>
          </div>
        </div>
        <div className='about-data'>
        <div className={`text-appear ${isLightOn ? 'visible':''}`}>
          <p>Hi, I’m Hemanth Sai Gokarakonda, an experienced Software Engineer and a recent Master’s graduate in Computer Science from California State University, Long Beach (CSULB). I am deeply passionate about leveraging cutting-edge technologies to solve real-world challenges and drive innovation.</p>
          <p>With over two years of experience in software development—spanning full-time and part-time roles—I have worked across multiple domains and industries. My expertise includes Python, Full Stack Development (React), AWS, Salesforce, SQL, ETL, Java, and AI. This diverse technical background enables me to build scalable solutions, optimize workflows, and enhance user experiences.</p>
          <p>Beyond my professional work, I have actively volunteered with various organizations, leading and organizing events during my undergraduate and graduate studies. Outside of tech, I am an avid gamer who enjoys playing online with friends. Some of my favorite titles include the God of War series, Spider-Man series, Rocket League, Tomb Raider, and Call of Duty.</p>
          <p>Let’s connect and explore how technology can drive impactful solutions!</p>
          <div className='social-links'>
            <a href='https://www.salesforce.com/trailblazer/hemanthsai457' target="_blank" rel="noopener noreferrer"><img src={trail} alt='trailhead'></img></a>
            <a href="https://www.linkedin.com/in/hemanthsaigokarakonda/"  target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='linkedin'></img></a>
            <a href='https://github.com/hemanthsai457'  target="_blank" rel="noopener noreferrer"><img src={github} alt='github'></img></a>
          </div>
        </div>
        </div>
      </div>
     );
}

export default About;