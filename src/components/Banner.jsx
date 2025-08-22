import React from "react";

export default function Banner() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900 text-center px-6">
      <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200">Hi, I'm Sumaiya Nishat</h2>
      <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">Frontend Developer | React.js & Tailwind CSS</p>
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Contact Me
      </a>
    </section>
  );
}
