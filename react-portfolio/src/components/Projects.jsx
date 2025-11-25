import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online store built with a modern frontend and a robust backend for seamless shopping experiences.',
            image: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1200',
            tags: ['React', 'Stripe', 'Node.js'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            title: 'Data Visualization Dashboard',
            description: 'An interactive dashboard for visualizing complex datasets with real-time updates and customizable charts.',
            image: 'https://images.pexels.com/photos/8152735/pexels-photo-8152735.jpeg?auto=compress&cs=tinysrgb&w=1200',
            tags: ['Python', 'D3.js', 'Flask'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            title: 'Personal Blog & CMS',
            description: 'A performant, statically-generated blog with a custom content management system for easy article creation.',
            image: 'https://images.pexels.com/photos/5744248/pexels-photo-5744248.jpeg?auto=compress&cs=tinysrgb&w=1200',
            tags: ['Next.js', 'Tailwind CSS', 'GraphQL'],
            liveLink: '#',
            codeLink: '#'
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
