import React from "react";
import './experience.css' 
import ParticlesComponent from './particles';
import Navbar from "./navbar";


function Experience() {

    const exps = [
        {
            id: 1,
            title: 'Research Assistant',
            description: 'I led the development and implementation of an AI-powered tool under the guidance of Dr. HongSheng Tong. The tool analyzes extensive sets of 3D orthodontic patient scanned models. My focus was on using AI technology to automate orthodontic diagnosis, treatment planning, and outcome prediction. The ultimate goal was to revolutionize orthodontic care by applying innovative uses of artificial intelligence.',
            // imageUrl: 'https://example.com/project1.jpg',
            tags: ['Image Processing', 'Python', 'Machine Learning'],
            githubUrl: 'https://github.com/shardul-datar?tab=repositories',
            // demoUrl: 'https://yourprojectdemo.com'
        },
        {
            id: 2,
            title: 'Summer Intern',
            description: 'As a group leader, I had the privilege of collaborating with Prof. Umesh Kulkarni and supervising a team of five talented individuals. Our collective objective was to design a Face Mask Detection system utilizing Deep Learning techniques in Python. This endeavor involved organizing and analyzing a vast dataset comprising approximately 5,000 images and developing a Neural Network incorporating two Convolution and MaxPool layers, each with a ReLU activation function. Our dedicated efforts yielded positive results, culminating in creating a dependable solution.',
            // imageUrl: 'https://example.com/project2.jpg',
            tags: ['Deep Learning', 'Image Processing', 'MAchine Learning'],
            githubUrl: 'https://github.com/shardul-datar/Face-Mask-Detector',
            // demoUrl: 'https://yourprojectdemo.com'
        },
        // Add more projects as needed
    ];

  return (        

        <div className="exp-page">
            <ParticlesComponent id="particles" />
            <Navbar />
            
            <h1>Exps</h1>
            <div className="exp-list">
                {exps.map(exp => (
                    <div key={exp.id} className="exp-card">
                        {/* <img src={project.imageUrl} alt={project.title} className="project-image" /> */}
                        <div className="exp-details">
                            <h2>{exp.title} </h2>
                            <p>{exp.description}</p>
                            <div className="exp-tags">
                                {exp.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="exp-links">
                                <a href={exp.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                                {/* <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Experience;