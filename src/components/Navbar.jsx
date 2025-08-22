import React from "react";


export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-blue-600 dark:text-blue-400">Sumaiya Nishat</h1>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
