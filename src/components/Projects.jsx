import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", desc: "React & Tailwind CSS", link: "#" },
  { title: "Todo App", desc: "JavaScript ES6 project", link: "#" },
  { title: "E-commerce UI", desc: "React + Tailwind CSS design", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-gray-900"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{project.desc}</p>
            <a href={project.link} className="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
