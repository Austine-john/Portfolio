import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-social">
                        <a href="https://github.com/Austine-john" target="_blank" rel="noopener noreferrer" className="footer-icon">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/austine-john/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/Austine77_" target="_blank" rel="noopener noreferrer" className="footer-icon">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Austine Ochieng. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
