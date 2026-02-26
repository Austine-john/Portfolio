import { useState, useEffect } from 'react';
import { FaBriefcase, FaFileAlt, FaDownload } from 'react-icons/fa';
import './Navbar.css';

const NAV_SECTIONS = ['home', 'about', 'journey', 'skills', 'projects', 'contact'];

const SECTION_VISIBILITY_THRESHOLD = 0.35;

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    // Track navbar background on scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Active section tracking via IntersectionObserver
    useEffect(() => {
        const sections = NAV_SECTIONS.map((id) =>
            document.getElementById(id)
        ).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: SECTION_VISIBILITY_THRESHOLD }
        );

        sections.forEach((s) => observer.observe(s));
        return () => sections.forEach((s) => observer.unobserve(s));
    }, []);

    return (
        <nav className={`navbar${isScrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
            <div className="nav-container">
                <a href="#home" className="nav-logo" aria-label="Austine Ochieng – home">
                    <FaBriefcase className="logo-icon" aria-hidden="true" />
                    <span>Austine Ochieng</span>
                </a>

                <ul className={`nav-menu${isMenuOpen ? ' active' : ''}`} role="menubar">
                    {[
                        { id: 'home',     label: 'Home' },
                        { id: 'about',    label: 'About' },
                        { id: 'journey',  label: 'Journey' },
                        { id: 'skills',   label: 'Skills' },
                        { id: 'projects', label: 'Projects' },
                    ].map(({ id, label }) => (
                        <li key={id} className="nav-item" role="none">
                            <a
                                href={`#${id}`}
                                className={`nav-link${activeSection === id ? ' active' : ''}`}
                                role="menuitem"
                                onClick={closeMenu}
                                aria-current={activeSection === id ? 'page' : undefined}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    <li className="nav-item" role="none">
                        <a href="#contact" className="nav-link nav-link-cta" role="menuitem" onClick={closeMenu}>
                            Get In Touch
                        </a>
                    </li>
                </ul>

                <a
                    href="/AUSTINE%20OCHIENG_CV.pdf"
                    download
                    rel="noopener noreferrer"
                    className="resume-btn"
                    aria-label="Download CV"
                >
                    <FaDownload aria-hidden="true" /> CV
                </a>

                <button
                    className={`hamburger${isMenuOpen ? ' active' : ''}`}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
