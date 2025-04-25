import React from 'react';
import { Award } from 'lucide-react';
import promotionImg from '../assets/promotion.png';

const Promotion = () => {
  return (
    <section className="bg-[#F3F6FB] py-16 px-6">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={promotionImg}
            alt="Promotion Policy Illustration"
            className="w-full rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
            <Award size={28} className="mr-2 text-[#1F386B]" />
            Our Promotion Policy
          </h2>
          <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            At N.M. Public School, promotion is granted based on a student’s
            overall performance throughout the academic year. Consistent
            participation is crucial, as missing even a single test can impact a
            student’s class rank and final results. A minimum of{" "}
            <strong>75% attendance</strong> is mandatory to be eligible for
            Board or School Examinations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The final examination serves to confirm the student’s progress trend
            over the year. To qualify for promotion, students in classes IX and
            XI must achieve at least a <strong>‘D’ grade</strong> in each
            subject, passing separately in both theory and practical
            examinations. The school’s decision regarding promotion is final,
            ensuring fairness and academic integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promotion;