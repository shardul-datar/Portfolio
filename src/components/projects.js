import React from "react";
import '../components/projects.css'
import ParticlesComponent from './particles';
import Navbar from "./navbar";


function Projects() {

    const projects_fs = [   
        {
            id: 1,
            title: "AI'm Right!",
            description: "During the SBHacks hackathon, I developed AI’m Right!, a generative AI-powered web application designed to enhance exam preparation and improve study efficiency by 30%, as reported by user feedback. The project featured a scalable full-stack ETL pipeline using Streamlit for the frontend, Flask for the backend, and Pinecone for vector database management. Leveraging Aryn AI's Sycamore model and Anthropic's Claude API, the application generated custom quizzes with 96% accuracy in topic relevance and answer validation. Additionally, it incorporated advanced video search capabilities using TwelveLabs' Marengo model API, allowing users to locate specific topics in lecture videos, reducing search time by 70%.",
            tags: ['Flask', 'ArynAI API', 'Pinecone', 'Streamlit', 'Anthropic API', 'Gen AI'],
            githubUrl: 'https://github.com/shardul-datar/SBHacks',
        },

        {
            id: 2,
            title: 'SociaLink',
            description: 'SociaLink is a dynamic social media platform designed to connect over 500 users. Built using the MERN stack, it includes key features such as user authentication, posts, likes, and comments. The interactive interface, developed in React with reusable components, improved development speed by 30%. The platform’s scalable Hadoop database is optimized to support over 1,000 concurrent users, handling millions of interactions efficiently. Deployed on AWS, with CI/CD pipelines for continuous integration, the application ensures fast performance, reducing API response times by 40% and maintaining a reliable 99.9% uptime.',
            tags: ['React', 'JavaScript', 'MongoDB', 'AWS Cloud', 'MERN Stack'],
            githubUrl: 'https://github.com/shardul-datar/SociaLink',
        },

        {
            id: 3,
            title: 'ConferX',
            description: 'ConferX is a full-stack video conferencing and web chat application designed for seamless, real-time communication. Built using HTML, JavaScript, CSS, Spring, AJAX, and Kurento client APIs, the platform enables multi-party video conferencing with secure user registry and dynamic room creation. Users can host custom virtual meetings with advanced collaboration tools, including live video conferencing, public/private chat, canvas sharing, and presentation sharing. The platform enhances user experience with real-time video streaming and sharing, fostering interactive and multimedia-rich communication.',
            tags: ['React', 'JavaScript', 'MongoDB', 'AWS Cloud', 'MERN Stack'],
            githubUrl: 'https://github.com/shardul-datar/ConferX',
        },

        {
            id: 4,
            title: 'Health Bridge',
            description: 'Health Bridge is a full-stack web application designed to improve healthcare accessibility in rural areas. Developed using ReactJS, MongoDB, NodeJS, HTML, and CSS, it provides features like online consultations, payment gateways, and a scheduling system to simplify healthcare services. The platform also includes an NLP-based generic brand finder, helping users search for affordable and available medications. Machine learning models such as KNN, Naive Bayes, and SVM are integrated for disease diagnosis, including diabetes, heart, and liver conditions, enhancing early detection and personalized healthcare recommendations.',
            tags: ['React', 'JavaScript', 'MongoDB', 'AWS Cloud', 'MERN Stack'],
            githubUrl: 'https://github.com/shardul-datar/Health-Bridge',
        },

       {
            id: 5,
            title: 'Movie Recommendation System - API',
            description: "The Movie Rating Website is a full-stack application designed to provide users with comprehensive information about movies and TV series, including details such as cast, release dates, and aggregated ratings. Developed using Python Flask, the site features a dynamic and responsive user interface that enhances user experience. To manage extensive datasets—comprising user watch history, ratings, and movie details—a SQL database is employed, ensuring efficient data retrieval and storage. The platform integrates the ‘TasteDive’ API to power a robust recommendation system, suggesting similar movies and TV shows based on user preferences, genres, and rating history. By leveraging a recommendation algorithm that utilizes watch history and ratings, the website enhances user engagement and satisfaction, providing personalized content suggestions.",
            tags: ['React', 'JavaScript', 'MongoDB', 'AWS Cloud', 'MERN Stack'],
            githubUrl: 'https://github.com/shardul-datar/Movie-Recommendation-System',
        }
    ];

    const projects_ml = [
        
        {
            id: 1,
            title: 'Olympics Highlights Generator',
            description: "During the Cerebral Beach Hackathon in October 2024, I secured 1st place in the sports category for developing an AI-powered Olympics Highlights Generator. This project involved building a full-stack web application using a JavaScript backend, Flask, and AWS S3 for video storage. By integrating Twelve Labs' Marengo model, I enabled the system to extract relevant clips based on user queries and seamlessly merged these clips into highlight videos using a Python script. To enhance the user experience, I incorporated Pegasus to generate AI-driven commentary and a text-to-speech model for audio narration. Additionally, I used the Gemini API to filter out hallucinated content, improving the accuracy of the commentary by 90%. This project showcases my ability to work with advanced AI models, full-stack development, and cloud technologies to deliver an impactful, end-to-end solution.",
            tags: ['API', 'JavaScript', 'Flask', 'AWS Cloud', 'Generative AI'],
            githubUrl: 'https://github.com/shardul-datar/Olympics_Highlights_Generator-CerebralHacks',
        },

        {
            id: 2,
            title: 'Sarcasm Generation',
            description: "This project focused on developing a system for generating sarcastic comments based on contextual cues from a Reddit dataset of over 500,000 entries. Using SQL and MongoDB to store contextual posts alongside sarcastic comments, a Python script was implemented to reframe posts as questions, improving sarcasm generation by 75% during training. The project employed two approaches: fine-tuning language models (GPT2, OPT, Bert, T5) and prompt-based generation using the Mistral-7b API. A sarcasm detection model was also integrated to evaluate generated text, achieving 88% accuracy for the prompt-based model and 59.2% for the fine-tuned model.",
            tags: ['NLP', 'Machine Learning', 'Python', 'LLMs'],
            githubUrl: 'https://github.com/shardul-datar/Sarcasm-Generation',
        },
        {
            id: 3,
            title: 'Multi-Task Reinforcement Learning',
            description: "This project focuses on developing a multi-task agent using reinforcement learning within the Chain Reaction Tool Environment (CREATE) via OpenAI Gym. The agent was trained to handle various tasks by strategically selecting and placing tools on the screen to guide objects toward designated goals. By integrating soft-modularization techniques, the model's performance saw a 150% increase in reward function value. The agent’s adaptability was further enhanced through a routing network. Additionally, a single-task reinforcement learning model was implemented using Actor-Critic-based Proximal Policy Optimization (PPO) to optimize the agent's decision-making process.",
            tags: ['Reinforcement Learning', 'Python', 'Actor Critique Model'],
            githubUrl: 'https://github.com/shardul-datar/multitask-rl-create',
        },

        {
            id: 4,
            title: 'Fake News Detection System',
            description: "The Fake News Detection System is an advanced NLP project designed to classify news articles as real or fake through a robust end-to-end CI/CD pipeline. Utilizing a comprehensive dataset of 45,000 instances, the system leverages SQL for efficient data management and implements a Passive Aggressive Classifier model for prediction. The project involves meticulous data preprocessing using td-idf vectorization, ensuring optimal feature representation for effective classification. Additionally, cosine similarity with News API enhances the accuracy and reliability of the detection process. This system achieved an impressive 92% accuracy on the test dataset, validating its efficacy in discerning authentic from fabricated news articles.",
            tags: ['Python', 'API', 'Passive-Aggressive Model', 'Flask'],
            githubUrl: 'https://github.com/shardul-datar/Fake_News_Detector_In_Django',
        },

        {
            id: 5,
            title: 'Face Mask Detector',
            description: "As a group leader, I had the privilege of collaborating with Prof. Umesh Kulkarni and supervising a team of five talented individuals. Our collective objective was to design a Face Mask Detection system utilizing Deep Learning techniques in Python. This endeavor involved organizing and analyzing a vast dataset comprising approximately 5,000 images and developing a Neural Network incorporating two Convolution and MaxPool layers, each with a ReLU activation function. Our dedicated efforts yielded positive results, culminating in creating a dependable solution.",
            tags: ['Python', 'Deep Learning', 'OpenCV'],
            githubUrl: 'https://github.com/shardul-datar/Face-Mask-Detector',
        },
    ];

  return (        

        <div className="projects-page">
            <ParticlesComponent id="particles" />
            <Navbar />    
        
            <h1>1. Full Stack</h1>
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

            <h1>2. Machine Learning</h1>
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