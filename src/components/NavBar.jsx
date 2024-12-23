import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../images/logo.png';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check the screen size
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);  // Mobile view
        } else {
            setIsMobile(false); // Desktop view
            setIsMenuOpen(false); // Close the menu when switching to desktop
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Toggle the mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="NavBar">
            <div className="logos" onClick={() => scrollToSection("home")}>
                <img src={logo} alt="logo" />
            </div>

            {/* Display the hamburger menu only on mobile */}
            {isMobile && (
                <div className="Nav-toggle" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}

            {/* Show the navigation links - default display for desktop and mobile toggle for mobile */}
            <div className={`Nav-links ${isMenuOpen && isMobile ? 'mobile' : ''}`}>
                <div className="Nav-link" onClick={() => scrollToSection("home")}>Home</div>
                <div className="Nav-link" onClick={() => scrollToSection("about")}>About</div>
                <div className="Nav-link" onClick={() => scrollToSection("skills")}>Skills</div>
                <div className="Nav-link" onClick={() => scrollToSection("workexp")}>Experience</div>
                <div className="Nav-link" onClick={() => scrollToSection("projects")}>Projects</div>
            </div>
        </div>
    );
};

export default NavBar;
