import React from "react";
import {TvMinimalPlay} from "lucide-react";
import digitalboard from "../assets/digitalboard.jpg";

const DigitalClassrooms = () => {
  return (
    <section className="bg-[#F3F6FB] py-16 px-6">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={digitalboard}
            alt="N.M. Public School Digital Classroom"
            className="w-full h-96 rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
            <TvMinimalPlay size={28} className="mr-2 text-[#1F386B]" />
            Digital Classrooms
          </h2>
          <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our digital classrooms are thoughtfully designed to create an
            immersive and inspiring learning environment. Equipped with
            cutting-edge technology, these spaces are well-ventilated, brightly
            lit, and crafted to promote focus and engagement, ensuring students
            thrive in a dynamic and comfortable setting.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tailored to suit diverse age groups, our classrooms feature modern
            furniture, interactive smart boards, and advanced audio-visual
            tools. These resources enable a seamless blend of guided instruction
            and hands-on exploration, fostering creativity, critical thinking,
            and a passion for learning through innovative and interactive
            teaching methods.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalClassrooms;
