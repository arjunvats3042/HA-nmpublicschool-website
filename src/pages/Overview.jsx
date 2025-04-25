import React from "react";

const Overview = () => {
  return (
    <div className="bg-[#f9fafe] min-h-screen py-10 px-4 md:px-12 text-[#1F386B]">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center border-b pb-4">
          Academic Information (2021–2022)
        </h2>

        <section>
          <p className="text-lg leading-relaxed">
            The school is affiliated to the All India Central Board Of Secondary
            Education, Delhi up to 10+2 level. The syllabus and course of
            studies offered and pursued at the school are as prescribed by the
            CBSE for the 10+2 system.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Our academic program is geared toward helping students develop
            informed perspectives on today's global world, along with the
            critical thinking, technological, communication, and social skills
            to solve problems and promote innovation wherever they go. It
            challenges students to become significantly more knowledgeable,
            skillful, organized, and articulate. Student interests and passions
            are integrated into the curriculum to help foster engagement and
            excitement about learning.
          </p>
        </section>

        <section className="bg-[#f0f4fb] p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">
            Pupil and Teacher Ratio
          </h3>
          <p className="text-lg">
            Ratio Between Teachers & Students: <strong>1.23</strong>
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#f0f4fb] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">School Hours</h3>
            <div>
              <p className="font-semibold underline">Summer</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Class Nursery/KG - 7:30 AM to 12:30 PM</li>
                <li>Class I to XII - 7:30 AM to 01:30 PM</li>
              </ul>
              <p className="mt-2 font-semibold underline">Winter</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Class Nursery/KG - 7:50 AM to 01:00 PM</li>
                <li>Class I to XII - 7:50 AM to 02:00 PM</li>
              </ul>
              <p className="mt-2">Recess:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Summer: 10:30 AM to 10:40 AM</li>
                <li>Winter: 11:00 AM to 11:20 AM</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f0f4fb] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Visiting Hours</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Principal:</strong> 7:50 AM to 09:40 AM on all working
                days
              </li>
              <li>
                <strong>Class Teacher:</strong> During recess/after school hours
              </li>
              <li>
                <strong>Subject Teacher:</strong> During recess/after school
                hours
              </li>
              <li>
                <strong>Counsellor:</strong> 08:00 AM to 09:00 AM on all working
                days & 09:00 AM to 02:15 PM with prior appointment
              </li>
              <li>
                <strong>School/Office Hours:</strong> 08:00 AM to 02:30 PM on
                all working days
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-[#fef9f3] border-l-4 border-[#1F386B] p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-3">Important Notes</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              The school gates will close at <strong>7:40 AM</strong> sharp in
              summers and <strong>08:00 AM</strong> sharp in winters.
            </li>
            <li>
              Class VI–XII will have extra/support classes; schedules will be
              announced during the session.
            </li>
            <li>
              No student will be allowed to leave the premises without prior
              written permission from the Principal.
            </li>
            <li>
              In case of medical issues, the Medical Supervisor or Class Teacher
              may call the parents to take the child home.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Overview;
