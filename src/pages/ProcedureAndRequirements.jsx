import React from "react";
import {ClipboardList} from "lucide-react";

const ProcedureAndRequirements = () => {
  return (
    <section className="bg-[#F3F6FB] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="flex items-center justify-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
            <ClipboardList
              size={30}
              className="mr-3 text-[#1F386B] transition-transform hover:scale-110"
            />
            Admission Procedure & Requirements
          </h2>
          <div className="h-1 w-24 bg-[#1F386B] mx-auto rounded-full transition-all duration-500 hover:w-32"></div>
        </div>
        <div className="md:flex md:items-start md:gap-16 animate-fade-in-up">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h3 className="text-xl font-semibold text-[#1F386B] mb-4">
              Admission Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Begin your journey with us by obtaining our Registration Form and
              Prospectus, available for INR 100 at the school reception or via
              postal delivery (additional INR 100). For your convenience, both
              are downloadable from our website, complete with detailed rules
              and regulations.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Admissions are determined through qualifying tests and personal
              interactions with the child and their parents, fostering a
              holistic evaluation. For our youngest learners in Nursery, no
              formal admission test is required, ensuring a warm and welcoming
              start.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-[#1F386B] mb-4">
              Required Documents
            </h3>
            <ul className="text-gray-700 leading-relaxed text-lg list-none pl-0">
              {[
                "Original Birth Certificate (Nursery, KG, 1st)",
                "Vaccination Certificate (Nursery to 3rd)",
                "Mark Sheet (from the last attended school)",
                "School Leaving Certificate, countersigned by state education authorities",
                "Two Photographs",
                "Migration Certificate (if applicable)",
              ].map((item, index) => (
                <li
                  key={index}
                  className="mb-3 flex items-start transition-transform duration-300 hover:translate-x-2"
                >
                  <span className="mr-2 text-[#1F386B] font-semibold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcedureAndRequirements;
