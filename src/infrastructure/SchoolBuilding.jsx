import React from "react";
import {School} from "lucide-react";
import schoolbuilding from "../assets/schoolbuilding.png";

const SchoolBuilding = () => {
  return (
    <section className="bg-[#F3F6FB] py-16 px-6">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={schoolbuilding}
            alt="N.M. Public School Building"
            className="w-full h-96 rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
            <School size={28} className="mr-2 text-[#1F386B]" />
            School Building
          </h2>
          <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            All three blocks of the school are thoughtfully designed, offering
            well-ventilated and well-lit spaces that create a refreshing and
            comfortable atmosphere for students. These open and airy
            environments contribute significantly to maintaining a positive and
            productive learning ambiance throughout the day.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The classrooms are furnished with contemporary furniture and
            fixtures, tailored to meet the needs of each age group. Junior
            classes are equipped with televisions and feature modern teaching
            aids, including audio-visual tools and multimedia technologies.
            These resources foster a dynamic and engaging learning experience,
            blending guided instruction with independent exploration through
            interactive and play-based methods.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SchoolBuilding;
