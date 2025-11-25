import {
    FaJsSquare, FaPython, FaJava, FaReact, FaAngular, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaTheaterMasks
} from 'react-icons/fa';
import {
    SiTypescript, SiFlask, SiDjango, SiExpress, SiBootstrap, SiTailwindcss,
    SiMongodb, SiPostgresql, SiSupabase, SiKubernetes, SiJenkins, SiSelenium
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillsData = {
        languages: [
            { name: 'JavaScript', icon: <FaJsSquare />, level: 90 },
            { name: 'Python', icon: <FaPython />, level: 85 },
            { name: 'Java', icon: <FaJava />, level: 80 },
            { name: 'TypeScript', icon: <SiTypescript />, level: 85 }
        ],
        frameworks: [
            { name: 'React', icon: <FaReact />, level: 90 },
            { name: 'Angular', icon: <FaAngular />, level: 75 },
            { name: 'Flask', icon: <SiFlask />, level: 80 },
            { name: 'Django', icon: <SiDjango />, level: 80 },
            { name: 'Express', icon: <SiExpress />, level: 85 },
            { name: 'Node.js', icon: <FaNodeJs />, level: 88 },
            { name: 'Bootstrap', icon: <SiBootstrap />, level: 85 },
            { name: 'Tailwind', icon: <SiTailwindcss />, level: 90 }
        ],
        tools: [
            { name: 'Docker', icon: <FaDocker />, level: 80 },
            { name: 'Git', icon: <FaGitAlt />, level: 90 },
            { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
            { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
            { name: 'Supabase', icon: <SiSupabase />, level: 75 },
            { name: 'Kubernetes', icon: <SiKubernetes />, level: 70 },
            { name: 'Jenkins', icon: <SiJenkins />, level: 70 }
        ],
        qa: [
            { name: 'Selenium', icon: <SiSelenium />, level: 85 },
            { name: 'Robot Framework', icon: <FaDatabase />, level: 80 },
            { name: 'Playwright', icon: <FaTheaterMasks />, level: 85 }
        ]
    };

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">My Tech Stack</h2>
                <p className="section-subtitle">
                    A showcase of the languages, frameworks, and tools I use to build modern web applications.
                </p>

                <div className="skills-category">
                    <h3 className="category-title">Languages</h3>
                    <div className="skills-grid">
                        {skillsData.languages.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <h4 className="skill-name">{skill.name}</h4>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h3 className="category-title">Frameworks & Libraries</h3>
                    <div className="skills-grid">
                        {skillsData.frameworks.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <h4 className="skill-name">{skill.name}</h4>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h3 className="category-title">Databases & Tools</h3>
                    <div className="skills-grid">
                        {skillsData.tools.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <h4 className="skill-name">{skill.name}</h4>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h3 className="category-title">QA & Testing</h3>
                    <div className="skills-grid">
                        {skillsData.qa.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <h4 className="skill-name">{skill.name}</h4>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
