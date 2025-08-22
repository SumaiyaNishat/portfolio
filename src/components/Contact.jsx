import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 text-center px-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Me</h2>
      <p className="mb-2 text-gray-700 dark:text-gray-300">Email: sumaiyanishat94@gmail.com</p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">Phone: +8801302347906</p>
      <a
        href="/Sumaiya_Nishat_CV.pdf"
        download
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Download CV
      </a>
    </section>
  );
}
