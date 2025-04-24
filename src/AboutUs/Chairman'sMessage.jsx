import React from 'react';
import { Award } from 'lucide-react';
import chairmanImg from '../assets/chairman.jpeg'; // replace with your actual chairman photo

const ChairmanMessage = () => (
  <section className="bg-[#F3F6FB] py-16 px-6">
    <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
      {/* Chairman Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 lg:pl-16">
        <img
          src={chairmanImg}
          alt="Chairman"
          className="w-80 rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500 "
        />
      </div>

      {/* Chairman’s Message */}
      <div className="md:w-1/2">
        <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
          <Award size={28} className="mr-2 text-[#1F386B]" />
          Chairman’s Message
        </h2>
        <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Education is the basis of all progress. It is for this very reason that we forayed into education. Over a decade and a half of experience has taught us that progress is possible only if men and women are equally well-educated.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          The entire purpose of education is not to restrict itself to imparting bookish knowledge only but to inculcate humanitarian values like wisdom, compassion, courage, humility, integrity, and reliability in a student.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We, just like you, believe in holistic education for your child, encompassing academics, co-curricular activities, sports education, and life-skills learning. Our endeavor is to strike a balance between state-of-the-art infrastructure and an internationally acceptable education.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We are confident that this school is the best place for your child. We welcome your active interest and involvement in your child’s progress and activities, and we look forward to your continuous support.
        </p>
      </div>
    </div>
  </section>
);

export default ChairmanMessage;
