import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-slate-50 text-slate-800 min-h-screen flex flex-col">
        <Header />
        <main className='flex-grow container mx-auto px-4 py-8'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;