import './App.css';
import { createRoot } from 'react-dom/client'
import React from 'react'
import Experience from './experience'; 
import Projects from './projects'; 
import gifImage from './developer.gif'


function App() {

  return (
    <div className="App">
      
      <main className="App-main">  
        <h1>Welcome to My Portfolio</h1>
        <p>I am a software developer currently pursuing MS in Computer Science from University of Southern California. </p>
        <div className='gif-container'>
          <img src={gifImage} alt="Example GIF" className='gif-container-img'/>
        </div>
        <div className="button-container">
          <a href="/experience">
            <button className="home-button">Experience</button>
          </a>
          <a href="/projects">
            <button className="home-button">Projects</button>
          </a>  
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Shardul Datar</p>
      </footer>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />); 

export default App;