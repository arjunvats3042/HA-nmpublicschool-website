import React from 'react';
import { User } from 'lucide-react';
import principalImg from '../assets/principal.jpeg'; // replace with your actual principal photo

const PrincipalMessage = () => (
  <section className="bg-[#F3F6FB] py-16 px-6">
    <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
      {/* Principal Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={principalImg}
          alt="Principal"
          className="w-full rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Principal’s Message */}
      <div className="md:w-1/2">
        <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
          <User size={28} className="mr-2 text-[#1F386B]" />
          Principal&apos;s Message
        </h2>
        <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Education is not merely acquisition of facts but of values the most important part of anyone’s life is to inculcate the best values that will provide one with the ability to command his or her life to the true sense. A person who is focused and disciplined towards its work will achieve something in life and beyond. In The N.M PUBLIC SCHOOL.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We enterprise to map academic excellence with a good human value system, which in myriad ways is ingrained in the culture of the school. To achieve this, we strongly feel that a paradigm shift in the minds of all stake holders should take place so that when the school becomes the hub to initiate and formalize education it has its tenets enshrined in a good value system; the extension of which is thereby taken home where it is further strengthened.
        </p>
      </div>
    </div>
  </section>
);

export default PrincipalMessage;
