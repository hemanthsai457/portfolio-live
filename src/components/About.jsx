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
          <p>Hello everyone, I am Hemanth Sai Gokarakonda, an experienced software engineer and a recent graduate with a master's degree in Computer Science at California State University, Long Beach (CSULB). I have a strong passion for learning and applying new technologies to address real-world challenges.</p>
          <p>With over two years of experience in software development, both full-time and part-time, I have worked with a diverse set of technologies including Python, Full Stack development (React), AWS, Salesforce, SQL, ETL, Java, and AI. My expertise spans various domains and industries, allowing me to bring a well-rounded perspective to my projects.</p>
          <p>In addition to my technical background, I have actively volunteered with multiple organizations during my undergraduate and graduate studies, organizing numerous events in and around the university. Outside of my professional interests, I am an avid gamer and enjoy playing online with friends. Some of my favorite games include the God of War series, Spider-Man series, Rocket League, Tomb Raider, and Call of Duty.</p>
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