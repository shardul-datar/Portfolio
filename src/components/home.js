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
          <h1>Welcome to My Portfolio</h1>
          <p>I am a software developer currently pursuing MS in Computer Science from University of Southern California. </p>
          </div>
          
          <div className='gif-container'>
            <img src={gifImage} alt="Example GIF" className='gif-container-img'/>
          </div>

        </main>
      </div>
    
  );
}

export default Home;