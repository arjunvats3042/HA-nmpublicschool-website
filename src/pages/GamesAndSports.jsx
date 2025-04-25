import React from "react";
import sports from "../assets/sports.png";
import {Trophy} from "lucide-react";

const GamesAndSports = () => {
  return (
    <section className="bg-[#F3F6FB] py-16 px-6">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={sports}
            alt="sports"
            className="w-full h-96 rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
            <Trophy size={28} className="mr-2 text-[#1F386B]" />
            Games & Sports
          </h2>
          <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our school boasts a sprawling playground that serves as the heart of
            our vibrant sports culture. Students engage in a variety of sports,
            including Football, Basketball, Throwball, Volleyball, and
            Badminton, alongside a range of indoor games. These activities are
            carefully supervised by our team of highly trained and qualified
            Physical Education Teachers (PETs) and coaches, ensuring both skill
            development and safety.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond sports, our school organizes a rich calendar of events such
            as the Annual Sports Day, School Annual Function, Science Fair,
            Parent’s Day, Exclusive Mother’s Day, Tiny-Tots Function, and School
            Fete. These events, widely appreciated by parents and guests, foster
            a sense of community, creativity, and celebration, enriching the
            holistic development of our students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamesAndSports;
