import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online store built with a modern frontend and a robust backend for seamless shopping experiences.',
            image: 'https://res.cloudinary.com/dzp17ssjz/image/upload/v1769431316/ecommerce_akevig.jpg',
            tags: ['React.js', 'Daraja API', 'Flask', 'sqlite'],
            liveLink: '',
            codeLink: '#'
        },
        {
            title: 'Fitness tracking platform',
            description: 'A complete fitness companion for tracking workouts, monitoring health metrics, and visualizing progress over time.',
            image: 'https://res.cloudinary.com/dzp17ssjz/image/upload/v1769431346/fitness_tkoi8h.jpg',
            tags: ['React.js', 'Tailwind CSS', 'Flask', 'Rest API', 'Postgresql'],
            liveLink: 'https://fitflow-frontend-alpha.vercel.app/login',
            codeLink: 'https://github.com/Austine-john/Fitflow-frontend'
        },
        {
            title: 'Human Resource Management System',
            description: 'An all-in-one HR solution for managing employee records, attendance, payroll, and recruitment workflows.',
            image: 'https://res.cloudinary.com/dzp17ssjz/image/upload/v1769431365/hrms_zg7zdn.jpg',
            tags: ['React.js', 'Tailwind CSS', 'Flask', 'Rest API', 'Postgresql'],
            liveLink: 'https://humanovahrms-front-end-repo.vercel.app',
            codeLink: 'https://github.com/Ian-N-N/humanovahrms_back_end_repo'
        }
    ];

    const filters = ['All', 'Web Apps', 'JavaScript', 'Python', 'UI Design'];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">
                    A selection of recent projects I've built, from web applications to design systems.
                </p>

                <div className="project-filters">
                    {filters.map((filter, index) => (
                        <button
                            key={index}
                            className={`filter-btn ${index === 0 ? 'active' : ''}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                        <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <FaGithub /> View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
