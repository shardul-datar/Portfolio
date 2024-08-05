// import './App.css';
import { createRoot } from 'react-dom/client'
import React from 'react'
import Home from './home'
import Experience from './experience'; 
import Projects from './projects'; 

function App() {

  return (
      
    <div className="App">
      {/* <Experience />
      <Projects /> */}
      <Home />
    </div>

  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />); 

export default App;