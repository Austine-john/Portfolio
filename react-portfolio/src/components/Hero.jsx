import { FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content fade-in-up">
                    <p className="hero-eyebrow">Hello, I&apos;m</p>
                    <h1 className="hero-title">
                        Austine Ochieng
                    </h1>
                    <p className="hero-roles">
                        <span className="gradient-text">Junior Software Engineer</span>
                        <span className="roles-divider"> &amp; </span>
                        <span className="gradient-text">Junior QA Engineer</span>
                    </p>
                    <p className="hero-subtitle">
                        Building reliable, well-tested web applications from concept to deployment.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a
                            href="/AUSTINE%20OCHIENG_CV.pdf"
                            download
                            className="btn btn-cv"
                            aria-label="Download Austine Ochieng CV"
                        >
                            <FaDownload aria-hidden="true" /> Download CV
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="hero-image fade-in-up">
                    <div className="image-wrapper">
                        <img src="https://res.cloudinary.com/dzp17ssjz/image/upload/v1769431446/IMG_5181_ac25sb.jpg" alt="Austine Ochieng" />
                    </div>
                </div>
            </div>
            <div className="scroll-indicator" aria-hidden="true">
                <p>Scroll to explore</p>
                <div className="scroll-arrow">↓</div>
            </div>
        </section>
    );
};

export default Hero;
