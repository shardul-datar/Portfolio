import './home.css'
import React from 'react' 
import gifImage from './developer.gif'
import ParticlesComponent from './particles';

function Home() {

  return (
      <div className="Home">
        <main className="Home-main">  
          
          <ParticlesComponent id="particles" />    
          
          <div className='txt'>  
            <h1>Hey! I am Shardul,</h1>
            <p>I am a dedicated graduate student at the University of Southern California, specializing in Computer Science with a focus on Artificial Intelligence. With a solid foundation from the University of Mumbai, where I earned my Bachelor’s in Computer Engineering, I possess a robust understanding of machine learning, data science, and full-stack development. My academic and professional experiences have honed my ability to tackle complex problems and develop innovative solutions across various domains.
              <br/><br/>I am proficient in a wide range of programming languages, including Python, JavaScript, and C++, and have expertise in frameworks such as React, Node.js, and Flask. My strong background in database management includes working with MongoDB, MySQL, and SQL for efficient data storage and retrieval. I am also well-versed in data analysis and visualization tools like R, Tableau, and Power BI, enabling me to derive actionable insights from complex datasets. 
              <br/><br/>In the realm of artificial intelligence and machine learning, I have hands-on experience with popular libraries and frameworks such as TensorFlow, Keras, PyTorch, and Scikit-learn. I am adept at implementing various machine learning algorithms, natural language processing techniques, and neural network architectures, ensuring optimal performance and accuracy in my projects. My familiarity with cloud technologies, particularly Amazon Web Services (AWS), Azure, and Google Cloud Platform (GCP), equips me with the skills needed to deploy and manage scalable applications effectively.
              <br/><br/>I am a strong collaborator and communicator, able to work effectively in team settings while also thriving in independent research environments. My analytical mindset, coupled with my passion for leveraging technology to create meaningful impact, drives me to continuously learn and adapt in this rapidly evolving field. As I progress in my studies and career, I am eager to contribute to innovative projects that harness the power of technology to solve real-world challenges.</p>          
          </div>
          <div className='gif-container'>
            <img src={gifImage} alt="Example GIF" className='gif-container-img'/>
          </div>

        </main>
      </div>
    
  );
}

export default Home;