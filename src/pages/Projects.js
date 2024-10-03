import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Modifier Mayhem",
      description: "A 3D first-person survival shooter game developed using C# and Unity.",
      details: [
        "Contributed to both gameplay mechanics and visual design.",
        "Implemented core game systems such as a dynamic round system, interactive user interface (UI), and various power-ups.",
        "Designed immersive game maps, balancing both aesthetics and functionality."
      ],
      technologies: ["C#", "Unity"]
    },
    {
      title: "Cybersecurity VR Game",
      description: "A VR game designed to teach users how to protect themselves from cyber attacks.",
      details: [
        "Led a team in the development using Unity and C# for gameplay mechanics and immersive user experience.",
        "Successfully demoed the game at the College of Science Research Symposium, Cal Poly Pomona.",
        "Engaged over 20 participants in hands-on sessions that educated them on cybersecurity best practices."
      ],
      technologies: ["C#", "Unity", "VR"]
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-teal-700">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-700 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
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