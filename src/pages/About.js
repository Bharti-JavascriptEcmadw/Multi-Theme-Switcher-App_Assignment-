import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-gradient-to-br from-blue-400 via-teal-300 to-gray-400">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10 max-w-3xl w-full text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Us</h2>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          This is a <strong>multi-theme React application</strong> built using <em>Tailwind CSS</em>.
          It showcases dynamic theme switching, responsive design, and modern web best practices.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          Developed by <strong>Hipster Pte. Ltd.</strong><br />
          UEN: 201621408D<br />
          Location: #01-04, 75 Ayer Rajah Crescent, 139953, Singapore
        </p>
      </div>
    </div>
  );
}
