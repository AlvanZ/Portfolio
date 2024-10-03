import React from 'react';

export default function Resume() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-teal-700">My Resume</h2>
      <p className="text-lg text-slate-600">
        Here's a detailed look at my professional experience and skills. You can view my resume below or download it for future reference.
      </p>
      <div className="flex justify-center">
        <a
          href={`${process.env.PUBLIC_URL}/Resume.pdf`} 
          download="Alvan_Zhuang_Resume.pdf"
          className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
        >
          Download Resume (PDF)
        </a>
      </div>
      <div className="w-full h-[800px] border border-slate-300 rounded-lg overflow-hidden shadow-lg">
        <iframe
        src={`${process.env.PUBLIC_URL}/Resume.pdf`} 
          title="Resume"
          className="w-full h-full"
        >
          This browser does not support PDFs. Please download the PDF to view it.
        </iframe>
      </div>
    </div>
  );
}
