import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce website built with React.js and Node.js, featuring user authentication and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Task Management App",
      description: "A Vue.js-based task management application with drag-and-drop functionality and real-time updates using Firebase.",
      technologies: ["Vue.js", "Firebase", "Vuex"]
    },
    {
      title: "Portfolio Website",
      description: "A custom-built portfolio website showcasing my skills and projects, created with React and React Router.",
      technologies: ["React", "React Router", "Tailwind CSS"]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-teal-700">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-700 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}