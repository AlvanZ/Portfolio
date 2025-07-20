import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-teal-700">Alvan Zhuang</h2>
        <p className="text-xl text-slate-600 mt-2">Aspiring Computer Scientist & Developer</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-teal-500">
        <p className="text-lg text-slate-600 mb-4">
          Hello! I'm a Computer Science graduate at California State Polytechnic University, Pomona, 
          passionate about creating innovative solutions through technology.
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>Graduated: May 2025</li>
          <li>GPA: 3.99 / Major GPA: 4.0</li>
          <li>Currently Research Assistant on Mobility Scooter Project</li>
          <li>Experience in Web, Game, Mobile App Development, and Machine Learning</li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/about" className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
          Learn More About Me
        </Link>
        <Link to="/projects" className="bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-slate-700 transition-colors">
          View My Projects
        </Link>
        <Link to="/resume" className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
          See My Resume
        </Link>
      </div>
    </div>
  );
}