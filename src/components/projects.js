import React from "react";
import '../components/projects.css'
import ParticlesComponent from './particles';
import Navbar from "./navbar";


function Projects() {

    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Description of Project 1',
            // imageUrl: 'https://example.com/project1.jpg',
            tags: ['React', 'JavaScript', 'Frontend'],
            githubUrl: 'https://github.com/yourusername/project1',
            // demoUrl: 'https://yourprojectdemo.com'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Description of Project 2',
            // imageUrl: 'https://example.com/project2.jpg',
            tags: ['Node.js', 'Express', 'Backend'],
            githubUrl: 'https://github.com/yourusername/project2',
            // demoUrl: 'https://yourprojectdemo.com'
        },
        // Add more projects as needed
    ];

  return (        

        <div className="projects-page">
            <ParticlesComponent id="particles" />
            <Navbar />    
        
            <h1>Projects</h1>
            <div className="projects-list">
                {projects.map(project => (
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