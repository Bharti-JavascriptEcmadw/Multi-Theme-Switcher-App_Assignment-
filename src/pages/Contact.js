import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-gradient-to-br from-blue-400 via-teal-300 to-gray-400">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <div className="mb-6 space-y-3 text-center text-gray-700 dark:text-gray-300">
          <p>
            📧 Email:{' '}
            <a href="mailto:hr@hipster-inc.com" className="text-blue-600 underline">
              hr@hipster-inc.com
            </a>
          </p>
          <p>
            📞 Phone:{' '}
            <a href="tel:+6582314107" className="text-blue-600 underline">
              +65 8231 4107
            </a>
          </p>
          <p>📍 Address: #01-04, 75 Ayer Rajah Crescent, 139953, Singapore</p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
