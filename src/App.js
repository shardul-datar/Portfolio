import './App.css';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react'
import Home from './home'
import Experience from './experience'; 
import Projects from './projects'; 
import Navbar from './navbar';

function App() {

  return (
      
  <div className='App'>
    <Home />

  </div>

  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />); 

export default App;