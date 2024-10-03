import React from 'react';
export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-teal-700">About Me</h2>
      <p className="text-lg text-slate-600">
        I'm a web developer with 5 years of experience in creating dynamic and responsive websites. 
        My passion lies in crafting clean, efficient code and delivering exceptional user experiences.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-teal-500">
        <h3 className="text-2xl font-semibold text-slate-700 mb-4">My Skills</h3>
        <ul className="grid grid-cols-2 gap-4 text-slate-600">
          <li className="flex items-center">
            <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
            HTML5, CSS3, and JavaScript
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
            React.js and Vue.js
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
            Node.js and Express
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
            MongoDB and SQL databases
          </li>
        </ul>
      </div>
      <p className="text-slate-600">
        When I'm not coding, you can find me hiking or reading about the latest web technologies.
      </p>
    </div>
  );
}