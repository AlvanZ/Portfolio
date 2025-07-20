import React from 'react';
export default function Projects() {
  const projects = [
        {
      title: "Quiz Slayer",
      description: "Developed a 2D educational quiz game using C# and Unity, featuring a serverless backend on AWS Lambda, frontend hosted on an EC2 instance, and game assets delivered via S3. Integrated OpenAI API to dynamically generate quiz content and interpret user responses.",
      details: [
        "Designed and implemented core gameplay mechanics, visuals, and Unity-to-web integration.",
        "Built backend using AWS Lambda with efficient API calls and connected frontend/backend to update the database in real time.",
        "Utilized OpenAI API to generate quiz questions and process natural language inputs from users."
      ],
      technologies: ["C#", "Unity", "React", "AWS Lambda", "AWS S3", "AWS EC2", "OpenAI API"],
      url: "https://github.com/YuStudy-Inc/QuizSlayer"
    },
    {
      title: "Modifier Mayhem",
      description: "A 3D first-person survival shooter game developed using C# and Unity.",
      details: [
        "Contributed to both gameplay mechanics and visual design.",
        "Implemented core game systems such as a dynamic round system, interactive user interface (UI), and various power-ups.",
        "Designed immersive game maps, balancing both aesthetics and functionality."
      ],
      technologies: ["C#", "Unity"],
      url: "https://github.com/Sweaty-Gamers/game"
    },
    {
      title: "Cybersecurity VR Game",
      description: "A VR game designed to teach users how to protect themselves from cyber attacks.",
      details: [
        "Led a team in the development using Unity and C# for gameplay mechanics and immersive user experience.",
        "Successfully demoed the game at the College of Science Research Symposium, Cal Poly Pomona.",
        "Engaged over 20 participants in hands-on sessions that educated them on cybersecurity best practices."
      ],
      technologies: ["C#", "Unity", "VR"],
      url: "https://github.com/AlvanZ/Cybersecurity-VR-Game"
    },
    {
      title: "LeetCode Playlist Manager",
      description: "A mobile app designed to to help users create and manage playlists of LeetCode problems.",
      details: [
        "As the team leader, I guided the app's architecture and feature implementation, ensuring a smooth and collaborative development process.",
        "Create playlists based on user's skill level(Beginner, intermediate, advanced).",
        "Customize playlists with categories such as 'Arrays,' 'Dynamic Programming,' or 'Graph Theory.'"
      ],
      technologies: ["Kotlin", "XML", "Android Studio"],
      url: "https://github.com/AlvanZ/MobileDevProject"
    },
    {
      title: "CPP Marketplace",
      description: "A full stack web application developed during a hackathon to create an open market platform for students to sell, share, or exchange items.",
      details: [
        "User authentication and profile management for secure buying and selling.",
        "Backend development using Node.js, Express, and supabase to handle data storage, routing, and API requests.",
        "Real-time updates for new listings and notifications.",
        "Dynamic product listings with search and filter capabilities."
      ],
      technologies: ["HTML", "CSS", "Javascript", "Node.js", "React", "Supabase"],
      url: "https://github.com/Darren52BT/CPP-Marketplace"
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-teal-700">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:cursor-pointer" onClick={() => window.location.href = project.url}>
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