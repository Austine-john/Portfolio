import { useEffect, useRef } from 'react';
import {
    FaJsSquare, FaPython, FaJava, FaReact, FaAngular, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaTheaterMasks
} from 'react-icons/fa';
import {
    SiTypescript, SiFlask, SiDjango, SiExpress, SiBootstrap, SiTailwindcss,
    SiMongodb, SiPostgresql, SiSupabase, SiKubernetes, SiJenkins, SiSelenium
} from 'react-icons/si';
import useScrollReveal from '../hooks/useScrollReveal';
import './Skills.css';

const STAGGER_DELAY_MS = 80;

const SkillCard = ({ skill, index }) => {
    const barRef = useRef(null);

    useEffect(() => {
        const bar = barRef.current;
        if (!bar) return;

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) {
            bar.style.width = `${skill.level}%`;
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = `${skill.level}%`;
                    }, index * STAGGER_DELAY_MS);
                    observer.unobserve(bar);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(bar);
        return () => observer.unobserve(bar);
    }, [skill.level, index]);

    return (
        <div className="skill-card">
            <div className="skill-icon" aria-hidden="true">{skill.icon}</div>
            <h4 className="skill-name">{skill.name}</h4>
            <div
                className="skill-bar"
                role="progressbar"
                aria-label={skill.name}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div className="skill-progress" ref={barRef} style={{ width: 0 }}></div>
            </div>
        </div>
    );
};

const SkillsCategory = ({ label, data }) => {
    const ref = useScrollReveal();
    return (
        <div className="skills-category reveal" ref={ref}>
            <h3 className="category-title">{label}</h3>
            <div className="skills-grid">
                {data.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const headingRef = useScrollReveal();

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
                <div className="reveal" ref={headingRef}>
                    <h2 className="section-title">My Tech Stack</h2>
                    <p className="section-subtitle">
                        A showcase of the languages, frameworks, and tools I use to build modern web applications.
                    </p>
                </div>

                <SkillsCategory label="Languages" data={skillsData.languages} />
                <SkillsCategory label="Frameworks & Libraries" data={skillsData.frameworks} />
                <SkillsCategory label="Databases & Tools" data={skillsData.tools} />
                <SkillsCategory label="QA & Testing" data={skillsData.qa} />
            </div>
        </section>
    );
};

export default Skills;
