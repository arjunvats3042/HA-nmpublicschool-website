import React from "react";
import {FileText} from "lucide-react";
import evaluationImg from "../assets/evaluation.jpg";

const EvaluationSystem = () => {
  return (
    <section className="bg-[#F3F6FB] py-16 px-6">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={evaluationImg}
            alt="Evaluation System Illustration"
            className="w-full rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
            <FileText size={28} className="mr-2 text-[#1F386B]" />
            Our Evaluation System
          </h2>
          <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            At N.M. Public School, our evaluation system is thoughtfully
            designed to foster holistic growth and academic excellence.
            Conducted on a terminal basis, it includes unit tests throughout the
            term for core subjects, ensuring continuous assessment and progress
            tracking.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For skill-based subjects, we emphasize practical performance.
            Grading is based on students’ demonstration of skills throughout the
            academic year, encouraging creativity, confidence, and mastery in a
            supportive learning environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EvaluationSystem;
