import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <img src="/assets/images/IMG_5160 (1).jpg" alt="Austine Ochieng" />
                        </div>
                    </div>
                    <div className="about-text">
                        <h2 className="section-title">About Me</h2>
                        <p className="about-description">
                            I'm a software engineer building production-ready web systems that are secure, predictable, and easy to maintain. My work focuses on backend application logic, authentication and authorization flows, and data-driven services that support real user workflows end-to-end.
                        </p>
                        <p className="about-description">
                            I design and implement APIs, access control mechanisms, and system boundaries with attention to correctness, failure modes, and long-term maintainability. I care about understanding how requests move through a system, how data is validated and persisted, and how frontend and backend components coordinate reliably.
                        </p>
                        <p className="about-description">
                            I am deeply interested in software engineering in both theory and practice, particularly in reasoning about system behavior, trade-offs, and constraints. I am driven by curiosity, rigor, and continuous learning, and I value collaboration, clear communication, and disciplined problem-solving as I grow through hands-on experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
