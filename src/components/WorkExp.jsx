import './WorkExp.css';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ershops from '../images/work/49ershops.jpg';
import optum from '../images/work/optum.jpg';
import accenture from '../images/work/accenture.jpg';
import amity from '../images/work/Amity-tech.jpg';

const WorkExp = () => {
    return (
      <div id="workexp" className="workexp-outer">
        <h1>Work Expereince</h1>
        <VerticalTimeline>
        <VerticalTimelineElement className='workexp-desc' date="Dec '22 - May '24" iconStyle={{ background: 'rgb(0, 255, 255)', color: '#fff'}}>
          <h2 className='timeline-title'> Student Assistant </h2>
          <h3><img src={ershops} alt="49er Shops"/>49er Shops INC</h3>
          <ol>
            <li>Supported Changes in the websites resulting in 80% customer satisfaction.</li> <br></br>
            <li>Resolved customer Queries within established SLA's.</li> <br></br>
            <li>Documented resolutions for future usage reducing the resolution time by 90%.</li>
          </ol>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='workexp-desc' date="Feb '22 - Jul '22" iconStyle={{ background: 'rgb(0, 255, 255)', color: '#fff' }}>
            <h2 className='timeline-title'>Associate Software Engineer - II </h2>
            <h3><img src={optum} alt="optum" />Optum</h3>
            <ol>
              <li>Enhanced React, Typescript applications and integrated Java/Spring Boot for backend, improving overall system performance by 25%.</li> <br></br>
              <li>Designed scalable applications, ETL pipelines using Python, Terraform, and AWS services to process diverse healthcare data formats, guaranteeing accuracy and availability for downstream analytics.</li> <br></br>
              <li>Created a Python application for XML file processing and data storing in Oracle, achieving a 90% speed boost.</li> <br></br>
              <li>Conducted research and analysis to drive innovation and insight discovery in healthcare technology</li>  <br></br>
              <li>Worked with cross-functional teams to identify and address engineering challenges in the healthcare domain.</li> 
            </ol>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='workexp-desc' date="Jun '21 - Feb '22" iconStyle={{ background: 'rgb(30, 255, 255)', color: '#fff' }}>
            <h2 className='timeline-title'> Application Development Associate </h2>
            <h3><img src={accenture} alt="Accenture"/>Accenture </h3>
            <ol>
              <li>Designed and maintained ETL/ELT pipelines with OLTP/OLAP data warehouses in Informatica to process 1M+ financial datasets from multiple sources, enhancing processing speed by 20% and reducing runtime errors by 15%</li> <br></br>
              <li>Built user-friendly interfaces using React.js and JavaScript, ensuring compliance with accessibility standards.</li> <br></br>
              <li>Resolved 100% of incidents and failures within established service level agreements.</li> <br></br>
              <li> Optimized Python, SQL scripts and managed PostgreSQL databases, improving data processing efficiency by 40%.</li> <br></br>
              <li>Produced analytical reports and interactive dashboards reducing 80% of worktime for comprehensive insights utilizing Tableau and Excel.</li>
            </ol>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='workexp-desc' date="Jun '20 - Jun '21" iconStyle={{ background: 'rgb(30, 255, 255)', color: '#fff' }}>
            <h2 className='timeline-title'> Associate Developer </h2>
            <h3><img src={amity} alt="Amity Technologies"/>Amity Technologies </h3>
            <ol>
              <li>Gained hands-on experience with AWS, Python, Terraform for data storage, automation and processing, reducing development, data processing time time by 15%.</li> <br></br>
              <li>Developed full-stack applications with Java and React, enhancing usability and optimizing performance.</li> <br></br>
              <li>Created analytical tools and dashboards for real-time data analysis, improving data accessibility by 50%.</li> <br></br>
              <li>Used Git for version control, improving code collaboration and tracking efficiency by 15%.</li> <br></br>
              <li>Contributed to documentation and knowledge sharing within the organization, ensuring project continuity.</li>
            </ol>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
}
export default WorkExp;