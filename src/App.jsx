import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DocumentGenerator from './components/DocumentGenerator';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2>Task or Treat</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<DocumentGenerator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App; 
