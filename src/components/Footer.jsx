import '../components/Footer.css';

const Footer = () => {
    return (  
        <div className='footer'>
            <div className='footer-content'>
                <p>&copy; 2024 Hemanth Sai Gokarakonda. All rights reserved.</p>
                <button className='ReturnToTop' onClick={scrollToTop}>Return to Top</button>
            </div>
        </div>
    );
}

const scrollToTop = () =>{
    window.scrollTo({top:0, behavior:'smooth'});
}
 
export default Footer;