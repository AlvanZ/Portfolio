import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const [statusMessage, setStatusMessage] = useState(''); // To show success or error message
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true
    setStatusMessage(''); // Clear previous status message

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatusMessage('Your message has been sent successfully!');
      // Clear form fields only after a successful submission
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      console.log(err);
      setStatusMessage('Something went wrong. Please try again later.');
      console.log(err.response);
    })
    .finally(() => {
      setIsSubmitting(false); // Reset loading state
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-teal-700">Contact Me</h2>
      <p className="text-lg text-slate-600">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      
      {/* Status Message */}
      {statusMessage && (
        <div className="text-center py-3 px-4 text-sm rounded-md bg-teal-100 text-teal-800">
          {statusMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors disabled:bg-teal-300"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
