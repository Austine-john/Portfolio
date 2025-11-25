import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <img src="/src/assets/images/profile.jpg" alt="Austine Ochieng" />
                        </div>
                    </div>
                    <div className="about-text">
                        <h2 className="section-title">About Me</h2>
                        <p className="about-description">
                            A passionate software engineer with a knack for creating elegant solutions in a fast-paced environment.
                            I thrive on turning complex problems into simple, beautiful, and intuitive designs.
                        </p>
                        <p className="about-description">
                            I am currently seeking opportunities to apply my skills in a collaborative and innovative team.
                            With expertise spanning full-stack development and quality assurance, I bring a comprehensive
                            approach to building robust, scalable applications.
                        </p>

                        <div className="about-journey">
                            <h3>My Journey</h3>
                            <div className="journey-item">
                                <div className="journey-icon">💼</div>
                                <div className="journey-content">
                                    <h4>Full-Stack Developer</h4>
                                    <p className="journey-company">Freelance | 2022 - Present</p>
                                    <ul>
                                        <li>Developed and maintained web applications using React and Node.js</li>
                                        <li>Collaborated with teams to ship new features</li>
                                        <li>Participated in code reviews to maintain code quality and standards</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="journey-item">
                                <div className="journey-icon">🎓</div>
                                <div className="journey-content">
                                    <h4>Bachelor of Science in Computer Science</h4>
                                    <p className="journey-company">Cooperative University Of Kenya | 2021 - 2025</p>
                                    <ul>
                                        <li>Graduated with Honors</li>
                                        <li>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management, Software Engineering, Cloud computing, Machine Learning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="journey-item">
                                <div className="journey-icon">💼</div>
                                <div className="journey-content">
                                    <h4>Software Engineerning</h4>
                                    <p className="journey-company">Moringa School | 2025 - Present</p>
                                    <ul>
                                        <li>Developed and maintained web applications using React and Node.js</li>
                                        <li>Collaborated with teams to ship new features</li>
                                        <li>Participated in code reviews to maintain code quality and standards</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
