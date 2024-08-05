import './home.css'
import React from 'react'
import Experience from './experience'; 
import Projects from './projects'; 
import gifImage from './developer.gif'
import ParticlesComponent from './particles';

function Home() {

  return (
      <div className="Home">
        <main className="Home-main">  
          
          <ParticlesComponent id="particles" />
          <h1>Welcome to My Portfolio</h1>
          <p>I am a software developer currently pursuing MS in Computer Science from University of Southern California. </p>
          
          <div className='gif-container'>
            <img src={gifImage} alt="Example GIF" className='gif-container-img'/>
          
          </div>
        </main>
        
        <footer className="Home-footer">
          <p>&copy; 2024 Shardul Datar</p>
        </footer>
      </div>
    
  );
}

// const root = createRoot(document.getElementById('root'));
// root.render(<App />); 

export default Home;