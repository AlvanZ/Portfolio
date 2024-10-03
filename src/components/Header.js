import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="bg-teal-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Alvan Zhuang</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-teal-200 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-200 transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-teal-200 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-teal-200 transition-colors">Contact</Link></li>
              <li><Link to="/resume" className="hover:text-teal-200 transition-colors">Resume</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}