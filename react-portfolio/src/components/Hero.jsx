import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Austine Ochieng, <span className="gradient-text">Full-Stack Developer</span>
                    </h1>
                    <p className="hero-subtitle">
                        Building intuitive digital experiences from concept to launch.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src="/src/assets/images/profile.jpg" alt="Austine Ochieng" />
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <p>Scroll down to see my work</p>
                <div className="scroll-arrow">↓</div>
            </div>
        </section>
    );
};

export default Hero;
