import React from 'react';
import { Target } from 'lucide-react';
import aimsImg from '../assets/aim-objective.avif'; // replace with your actual image

const AimsObjectives = () => (
  <section className="bg-[#F3F6FB] py-16 px-6">
    <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
      {/* Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={aimsImg}
          alt="Aims and Objectives"
          className="w-full rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2">
        <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
          <Target size={28} className="mr-2 text-[#1F386B]" />
          Our Aims &amp; Objectives
        </h2>
        <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>
        <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
          <li>Deliver high-quality education in pursuit of academic excellence.</li>
          <li>Nurture each child’s holistic growth—intellectual, emotional, and social.</li>
          <li>Build and maintain institutions dedicated to these educational ideals.</li>
          <li>Instill patriotic, social, and ethical values for responsible citizenship.</li>
          <li>Cultivate civic awareness and a strong sense of community duty.</li>
          <li>Channel students’ boundless energy into creativity, self-sufficiency, and talent development.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default AimsObjectives;
