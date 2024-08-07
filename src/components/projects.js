import React from "react";
import '../components/projects.css'
import ParticlesComponent from './particles';
import Navbar from "./navbar";


function Projects() {

    const projects_fs = [
        {
            id: 1,
            title: 'Health Bridge',
            description: 'Description of Project 1',
            tags: ['NLP', 'Machine Learning', 'Python'],
            githubUrl: 'https://github.com/yourusername/project1',
        },
       
    ];

    const projects_ml = [
        {
            id: 1,
            title: 'Sarcasm Generation',
            description: 'Description of Project 1',
            // imageUrl: 'https://example.com/project1.jpg',
            tags: ['NLP', 'Machine Learning', 'Python'],
            githubUrl: 'https://github.com/yourusername/project1',
            // demoUrl: 'https://yourprojectdemo.com'
        },
        {
            id: 2,
            title: 'Multi-Task Reinforcement Learning',
            description: 'Description of Project 2',
            // imageUrl: 'https://example.com/project2.jpg',
            tags: ['Node.js', 'Express', 'Backend'],
            githubUrl: 'https://github.com/yourusername/project2',
            // demoUrl: 'https://yourprojectdemo.com'
        },
    ];

  return (        

        <div className="projects-page">
            <ParticlesComponent id="particles" />
            <Navbar />    
        
            <h1>Full Stack</h1>
            <div className="projects-list">
                {projects_fs.map(project => (
                    <div key={project.id} className="project-card">
                        {/* <img src={project.imageUrl} alt={project.title} className="project-image" /> */}
                        <div className="project-details">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                                {/* <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h1>Machine Learning</h1>
            <div className="projects-list">
                {projects_ml.map(project => (
                    <div key={project.id} className="project-card">
                        {/* <img src={project.imageUrl} alt={project.title} className="project-image" /> */}
                        <div className="project-details">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                                {/* <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Projects;