import React from 'react';

export default function About() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-teal-700">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-slate-700 mb-2">My Journey</h3>
          <p className="text-slate-600">
            As a Computer Science student at California State Polytechnic University, Pomona, 
            I've developed a passion for solving complex problems through technology. My academic 
            journey has been marked by consistent excellence, maintaining a 3.99 GPA and earning 
            spots on the Dean's List and President's Honor List multiple times.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-700 mb-2">Research and Experience</h3>
          <p className="text-slate-600">
            Currently, I'm working as a Research Assistant on the CPP Mobility Scooter Research Project, 
            where I'm developing machine learning models and working on a mobile application. I've also 
            gained valuable experience as a STEM Instructor Intern and as a Lab Assistant in the CPP VR lab, 
            which has honed my skills in teaching, troubleshooting, and working with cutting-edge technologies.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-700 mb-2">Skills and Interests</h3>
          <p className="text-slate-600 mb-4">
            My coursework and projects have given me a strong foundation in various areas of computer science, 
            including:
          </p>
          <ul className="grid grid-cols-2 gap-4 text-slate-600">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
              Web Development (React.js, Node.js)
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
              Game Development (Unity, C#)
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
              Mobile Development (Android Studio)
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
              Machine Learning (PyTorch)
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
              Database Systems (MongoDB, NoSQL)
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
              Version Control (Git)
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-700 mb-2">Looking Forward</h3>
          <p className="text-slate-600">
          I am always eager to learn and take on new challenges across various domains. I’m particularly interested in the intersection of emerging technologies with web, app, and game development. Whether it's building dynamic web applications, creating mobile experiences, or exploring the potential of VR/AR in gaming, I’m excited about pushing the boundaries of what’s possible. As I continue expanding my skills and working on personal projects, I look forward to contributing to innovative solutions that can make a positive impact in the tech world.
          </p>
        </div>
      </div>
    </div>
  );
}