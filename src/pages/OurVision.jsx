import React from 'react';
import { Telescope } from 'lucide-react';
import visionImg from '../assets/vision.png';

const VisionMission = () => (
  <section className="bg-[#F3F6FB] py-16 px-6">
    <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
      {/* Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={visionImg}
          alt="Vision and Mission"
          className="w-full rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Text */}
      <div className="md:w-1/2">
        <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
          <Telescope size={28} className="mr-2 text-[#1F386B]" />
          Our Vision &amp; Mission
        </h2>
        <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>

        {/* Vision */}
        <h3 className="text-2xl font-semibold text-[#1F386B] mb-2">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          To cultivate a forward-looking learning community where every student masters 21st-century skills, embraces innovation, and develops a strong sense of social and environmental responsibility.
        </p>

        {/* Mission */}
        <h3 className="text-2xl font-semibold text-[#1F386B] mb-2">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          To champion an educational model that weaves nature’s timeless lessons into cutting-edge pedagogy, empowering young leaders to think globally, act locally, and drive positive change in a rapidly evolving world.
        </p>
      </div>
    </div>
  </section>
);

export default VisionMission;
