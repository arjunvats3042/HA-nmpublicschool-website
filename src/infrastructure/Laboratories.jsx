import React from "react";
import biology from "../assets/biology.jpeg";
import chemistry from "../assets/chemistry.jpeg";
import chem from "../assets/chem.jpeg";
import library from "../assets/library.jpeg";
import {Microscope} from "lucide-react";

const Laboratories = () => {
  const images = [biology, chemistry, chem, library];

  return (
    <section className="bg-[#F3F6FB] py-16 px-6">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-48 rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
            <Microscope size={28} className="mr-2 text-[#1F386B]" />
            Laboratories & Library
          </h2>
          <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our school is proud to offer meticulously designed laboratories for
            Biology, Chemistry, and Physics. These state-of-the-art facilities
            provide students with hands-on opportunities to explore scientific
            concepts through practical experiments and investigatory projects at
            the +2 level, fostering a deep understanding of core scientific
            principles.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Complementing our laboratories is a well-resourced library, a hub of
            knowledge and learning. Equipped with an extensive collection of
            books, digital resources, and study materials, the library supports
            students in their academic pursuits and encourages independent
            research, creativity, and intellectual growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Laboratories;
