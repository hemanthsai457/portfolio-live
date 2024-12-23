import React from "react";
import './Skills.css';
import c from '../images/skills_img/prog_lang/c.svg'
import java from '../images/skills_img/prog_lang/java.svg'
import python from '../images/skills_img/prog_lang/python.svg'
import javascript from '../images/skills_img/prog_lang/javascript.svg'
import db from '../images/skills_img/prog_lang/db.png'
import HTML from '../images/skills_img/web_tech/html.svg'
import CSS from '../images/skills_img/web_tech/css.svg'
import node from '../images/skills_img/web_tech/nodejs.svg'
import angular from '../images/skills_img/web_tech/angular.svg'
import react from '../images/skills_img/web_tech/react.svg'
import mongodb from '../images/skills_img/web_tech/mongodb.svg'
import api from '../images/skills_img/web_tech/api.png'
import oracle from '../images/skills_img/database/oracle.svg'
import mysql from '../images/skills_img/database/mysql.svg'
import s3 from '../images/skills_img/database/s3.png'
import rds from '../images/skills_img/database/rds.png'
import amazon from '../images/skills_img/cloud/amazon.svg'
import azure from '../images/skills_img/cloud/azure.svg'
import gcp from '../images/skills_img/cloud/gcloud.png'
import docker from '../images/skills_img/cloud/docker.svg'
import eclipse from '../images/skills_img/other/eclipse.svg'
import vscode from '../images/skills_img/other/vscode.svg'
import ai from '../images/skills_img/other/ai.png'
import nlp from '../images/skills_img/other/nlp.png'
import jupyter from '../images/skills_img/other/jupyter.png'
import npm from '../images/skills_img/other/npm.png'
import twilio from '../images/skills_img/other/twilio.png'
import linux from '../images/skills_img/other/linux.png'



const Skills = () => {
    return (
    <div id="skills" className="skills-outer">
        <h1>Technical Skills</h1>
        <div className="Technologies">
        <h2 className="skill-title">Programming Languages</h2>
            <div className="Tech-box prog-lang">
                <div className="scrolling-images">
                    <figure>
                        <img src={c} alt="C Language"/>
                        <figcaption>C Language</figcaption>
                    </figure>
                    <figure>
                        <img src={java} alt="Java"/>
                        <figcaption>Java</figcaption>
                    </figure>
                    <figure>
                        <img src={python} alt="Python"/>
                        <figcaption>Python</figcaption>
                    </figure>
                    <figure>
                    <img src={javascript} alt="Javascript"/>
                        <figcaption>JavaScript</figcaption>
                    </figure>
                    <figure>
                        <img src={oracle} alt="oracle"/>
                        <figcaption>Oracle</figcaption>
                    </figure>
                    <figure>
                        <img src={mysql} alt="mysql"/>
                        <figcaption>MySQL</figcaption>
                    </figure>
                </div>
            </div>
            <h2 className="skill-title">Web Technologies</h2>
            <div className="Tech-box web-techno">
                <div className="scrolling-images">
                    <figure>
                        <img src={HTML} alt="HTML"/>
                        <figcaption>HTML</figcaption>
                    </figure>
                    <figure>
                        <img src={CSS} alt="CSS"/>
                        <figcaption>CSS</figcaption>
                    </figure>
                    <figure>
                        <img src={node} alt="node.js"/>
                        <figcaption>Node.js</figcaption>
                    </figure>
                    <figure>
                        <img src={angular} alt="Angular"/>
                        <figcaption>Angular</figcaption>
                    </figure>
                    <figure>
                        <img src={react} alt="React"/>
                        <figcaption>React</figcaption>
                    </figure>
                    <figure>
                        <img src={api} alt="API"/>
                        <figcaption>API</figcaption>
                    </figure>
                </div>
            </div>
            <h2 className="skill-title">Cloud Skills</h2>
            <div className="Tech-box Cloud">
                <div className="scrolling-images">
                    <figure>
                        <img src={amazon} alt="Amazon"/>
                        <figcaption>Amazon Web Servies</figcaption>
                    </figure>
                    <figure>
                        <img src={azure} alt="Azure" />
                        <figcaption>Azure</figcaption>
                    </figure>
                    <figure>
                        <img src={gcp} alt="Google Cloud"/>
                        <figcaption>Google Cloud</figcaption>
                    </figure>
                    <figure>
                        <img src={docker} alt="Docker"/>
                        <figcaption>Docker</figcaption>
                    </figure>
                </div>
            </div>
            <h2 className="skill-title">Other Tools & Technologies</h2>
            <div className="Tech-box Other-tech">
                <div className="scrolling-images">
                    <figure>
                        <img src={eclipse} alt="Eclipse"/>
                        <figcaption>Eclipse</figcaption>
                    </figure>
                    <figure>
                        <img src={vscode} alt="VsCode"/>
                        <figcaption>VsCode</figcaption>
                    </figure>
                    <figure>
                        <img src={ai} alt="AI"/>
                        <figcaption>Artificial Intelligence</figcaption>
                    </figure>
                    <figure>
                        <img src={nlp} alt="NLP"/>
                        <figcaption>Natural Language Processing</figcaption>
                    </figure>
                    <figure>
                        <img src={jupyter} alt="Jupyter"/>
                        <figcaption>Jupyter</figcaption>
                    </figure>
                    <figure>
                        <img src={twilio} alt="Twilio"/>
                        <figcaption>Twilio</figcaption>
                    </figure>
                    {/* <figure>
                        <img src={npm} alt="Npm"/>
                        <figcaption>Node Package Manager</figcaption>
                    </figure> */}
                    <figure>
                        <img src={linux} alt="Linux"/>
                        <figcaption>Linux</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Skills;