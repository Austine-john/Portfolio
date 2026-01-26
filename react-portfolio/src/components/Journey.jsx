import './Journey.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Journey = () => {
    return (
        <section id="journey" className="journey-section">
            <div className="container">
                <h2 className="section-title">My Journey</h2>
                <p className="section-subtitle">
                    My professional and educational path in software development.
                </p>

                <div className="journey-container">
                    <div className="journey-item">
                        <div className="journey-icon"><FaBriefcase /></div>
                        <div className="journey-content">
                            <h4>Full-Stack Developer</h4>
                            <p className="journey-company">Freelance | 2022 - Present</p>
                        </div>
                    </div>

                    <div className="journey-item">
                        <div className="journey-icon"><FaGraduationCap /></div>
                        <div className="journey-content">
                            <h4>Bachelor of Science in Computer Science</h4>
                            <p className="journey-company">Cooperative University Of Kenya | Sep 2021 - Dec 2025</p>
                        </div>
                    </div>

                    <div className="journey-item">
                        <div className="journey-icon"><FaGraduationCap /></div>
                        <div className="journey-content">
                            <h4>Software Engineering</h4>
                            <p className="journey-company">Moringa School | May 2025 - Dec 2025</p>
                        </div>
                    </div>

                    <div className="journey-item">
                        <div className="journey-icon"><FaBriefcase /></div>
                        <div className="journey-content">
                            <h4>Junior Quality Assurance Engineer</h4>
                            <p className="journey-company">Konvergenz Network Solutions | Oct 2025 - Present</p>
                        </div>
                    </div>

                    <div className="journey-item">
                        <div className="journey-icon"><FaBriefcase /></div>
                        <div className="journey-content">
                            <h4>Intern Frontend Developer</h4>
                            <p className="journey-company">Smart Applications International | May 2024 - Aug 2024</p>
                        </div>
                    </div>
                    {/* Spacer to ensure last card is fully visible */}
                    <div style={{ minWidth: '2rem', flexShrink: 0 }}></div>
                </div>
            </div>
        </section>
    )
}

export default Journey;
