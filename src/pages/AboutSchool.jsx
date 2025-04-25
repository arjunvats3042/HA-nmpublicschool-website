import React from 'react';
import { BookOpen } from 'lucide-react';
import schoolImg from '../assets/about.png';

const AboutSchool = () => {
  return (
    <section className="bg-[#F3F6FB] py-16 px-6">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={schoolImg}
            alt="N.M. Public School Building"
            className="w-full rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
            <BookOpen size={28} className="mr-2 text-[#1F386B]" />
            About N.M. Public School
          </h2>
          <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>
            <p className="text-gray-700 leading-relaxed mb-4">
                Founded in 1990 by visionary educator Ch. Karan Singh Nagar and run by R.L. Vidya Samiti, N.M. Public School proudly stands 
                as one of Greater Noida (West)’s first CBSE-affiliated institutions. We’re dedicated to nurturing academic excellence, 
                character development, and lifelong curiosity in every student.
            </p>
            <p className="text-gray-700 leading-relaxed">
            Spread across a lush <strong>2-acre</strong> campus, our school features three state-of-the-art academic buildings and a 
            vibrant playground—crafted to inspire rigorous learning, athletic achievement, and creative exploration.
            </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSchool;
