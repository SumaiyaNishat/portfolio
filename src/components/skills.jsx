import React from "react";

const skills = ["HTML", "CSS", "JavaScript (ES6+)", "React.js", "Tailwind CSS"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
