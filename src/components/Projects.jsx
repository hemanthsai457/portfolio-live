import './Projects.css';
import tune_therapy from '../images/Projects/tune_therapy.png';
import forest_fire from '../images/Projects/forest_fire_prediction.jpg';
import inventory_analysis from '../images/Projects/inventory_management.jpg';
import delidash from '../images/Projects/DeliDash.jpg';
import heartpulse from '../images/Projects/heartpulse.jpg';
import portfolio from '../images/Projects/portfolio.png';

const Projects = () => {
    return (
        <div id="projects" className="proj-outer">
            <h1>Special Projects</h1>
            <div className='proj-main-1'>
            <div className='proj-inner'>
                <h2><img src={tune_therapy} alt='Tune Therapy'/>Tune Therapy</h2>
                <p>The project created a mood assessment software using NLP techniques. It started with playlist analysis using TF-IDF for preprocessing and extracting insights. LDA was then used for topic modeling. A research paper summarizing the project's findings was submitted to AI conferences. A mood prediction model, trained on a dataset of 500,000 songs, achieved 93% test accuracy, enabling personalized music recommendations for improved user experience.</p>
                <br></br>
                <br></br>
                <br></br>
                <a href="https://github.com/hemanthsai457/Tune-Therapy"  target="_blank" rel="noopener noreferrer"><button className='view-but' type='button'>View</button></a>
            </div>
            <div className='proj-inner'>
                <h2><img src={forest_fire} alt="forest fire"/>Forest Fire Prediction</h2>
                <p>Developed a precise prediction model using environmental data to forecast forest fire sizes with 98% precision. Through detailed data analysis and machine learning techniques, it revealed crucial insights into environmental factors affecting forest fire spread. Key predictors were identified with 90% confidence using various visualization methods. These findings informed improvements in fire control tactics, resulting in a significant 15% reduction in affected forest areas. Overall, the project showcased expertise in data analysis, machine learning, and effective risk mitigation strategies.</p>
                <a href='https://github.com/hemanthsai457/Forest-Fire-Prediction'  target="_blank" rel="noopener noreferrer"><button className='view-but' type='button'>View</button></a>
            </div>
            <div className='proj-inner'>
                <h2><img src={inventory_analysis} alt='inventory analysis'/>Inventory Optimization and Sales Forecasting Analysis</h2>
                <p>Analyzed data from 132 stores using Python, Pandas, and Seaborn to uncover inventory insights. Advanced predictive models, such as Random Forest, XGBoost, and LSTM, were developed and optimized, achieving an 83.8% test r-squared value for accurate sales forecasts. An Explainerdashboard was implemented to enhance inventory decision-making with clear model insights, significantly improving inventory management and store performance.</p>
                <br></br><br></br>
                <a href='https://github.com/hemanthsai457/Inventory-Optimization-and-Sales-Forecasting-Analysis'  target="_blank" rel="noopener noreferrer"><button className='view-but' type='button'>View</button></a>
            </div>
            </div>
            <div className='proj-main-2'>
                <div className='proj-inner'>
                    <h2><img src={portfolio} alt='Portfolio'/>My Portfolio</h2>
                    <p>The Personal Portfolio is a responsive website built with React, HTML, CSS, and JavaScript to showcase my skills, projects, and achievements. It features a sleek, mobile-friendly design with interactive elements like a collapsible menu and a smooth-scroll button. Deployed and managed on Github, Github Pages, it highlights my expertise in web development, UI/UX design, project implementation and maintainance.</p>
                    <br></br>
                    <a href='https://github.com/hemanthsai457/portfolio-git' target="_blank" rel="noopener noreferrer"><button className='view-but' type='button'>View</button></a>
                </div>
                <div className='proj-inner'>
                    <h2><img src={delidash} alt='DeliDash'/>DeliDash</h2>
                    <p>Developed a Java-based food delivery system using 100% Object-Oriented Programming (OOP) principles. Designed a scalable Oracle database, improving data retrieval speed by 30%. Implemented features like user distinction and order caching, increasing user satisfaction by 60% through effective use of OOP principles.</p>
                    <br></br>
                    <br></br><br></br>
                    <a href='https://github.com/hemanthsai457/DeliDash' target="_blank" rel="noopener noreferrer"><button className='view-but' type='button'>View</button></a>
                </div>
                <div className='proj-inner'>
                    <h2><img src={heartpulse} alt='HeartPulse Monitoring and Notification System'/>HeartPulse Monitoring and Notification System</h2>
                    <p>Designed an AWS VPC server to monitor abnormal heartbeats with 99% accuracy, integrating Twilio for notifications and securely storing data in a database. Collaborated with a local hospital to test the application on hundreds of volunteers. Presented the project at the International Conference on AI and Smart Systems (ICAIS) among 1000 presenters and published the findings.</p>
                    <a href='https://github.com/hemanthsai457/Heartpulse-monitoring-and-notification-system'  target="_blank" rel="noopener noreferrer"><button className='view-but' type='button'>View</button></a>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;