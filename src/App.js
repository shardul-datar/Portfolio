import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from './components/home'
import Experience from './components/experience'; 
import Projects from './components/projects'; 
import Navbar from './components/navbar'

function App() {

  return (

    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>

  );
}


export default App;