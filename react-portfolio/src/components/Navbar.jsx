import { useState } from 'react';
import { FaBriefcase, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#home" className="nav-logo">
                    <FaBriefcase className="logo-icon" />
                    <span>Austine Ochieng</span>
                </a>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link" onClick={closeMenu}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={closeMenu}>
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link" onClick={closeMenu}>
                            Skills
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link" onClick={closeMenu}>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link nav-link-cta" onClick={closeMenu}>
                            Get In Touch
                        </a>
                    </li>
                </ul>

                <div className="nav-icons">
                    <a href="https://github.com/Austine-john" target="_blank" rel="noopener noreferrer" className="nav-icon">
                        <FaCode />
                    </a>
                    <a href="https://www.linkedin.com/in/austine-john/" target="_blank" rel="noopener noreferrer" className="nav-icon">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:austineochieng101@gmail.com" className="nav-icon">
                        <FaEnvelope />
                    </a>
                </div>

                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
                    <FaFileAlt /> Resume
                </a>

                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
