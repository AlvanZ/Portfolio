import React from 'react';

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-teal-700">Welcome to My Portfolio</h2>
      <p className="text-lg text-slate-600">
        Hello! I'm Jane Doe, a passionate web developer with expertise in creating responsive and user-friendly websites. 
        Explore my portfolio to see my latest projects and skills.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-teal-500">
        <h3 className="text-2xl font-semibold text-slate-700 mb-2">My Expertise</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>Responsive Web Design</li>
          <li>Front-end Development (React, Vue)</li>
          <li>Back-end Development (Node.js, Express)</li>
          <li>Database Management (MongoDB, SQL)</li>
        </ul>
      </div>
    </div>
  );
}