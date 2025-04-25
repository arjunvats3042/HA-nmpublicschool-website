import React from "react";

const Curriculum = () => {
  return (
    <div className="bg-[#f9fafe] min-h-screen py-10 px-4 md:px-12 text-[#1F386B]">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center border-b pb-4">
          Curriculum - Overview
        </h2>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">CLASSES I–V</h3>
          <p className="text-lg">
            The students will be assessed regularly throughout the year.
          </p>

          <h3 className="text-2xl font-semibold">CLASSES VI–X</h3>
          <p className="text-lg">
            The students will be assessed regularly throughout the year.
          </p>

          <div className="bg-[#f0f4fb] p-6 rounded-xl mt-4">
            <h4 className="text-xl font-semibold mb-2">
              Internal Assessment - Scholastic
            </h4>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>
                <strong>Periodic Test:</strong> Three written tests will be
                conducted; the average of the best two will be considered.
              </li>
              <li>
                <strong>Notebook Submission:</strong> Encourages regularity,
                neatness, and preparation of classroom notes and assignments.
              </li>
              <li>
                <strong>Subject Enrichment:</strong> Activities like lab work,
                projects, map work, and communication skills will be assessed
                internally.
              </li>
              <li>
                <strong>Co-Scholastic Activities:</strong> Graded on a 5-point
                scale (A to E) for sports, yoga, and work education.
              </li>
              <li>
                <strong>Discipline:</strong> Attendance, sincerity, behaviour,
                and values graded on a 5-point scale by the class teacher.
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-[#fef9f3] border-l-4 border-[#1F386B] p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-3">Assessment Weightage</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              <strong>Term II Examination:</strong> 80%
            </li>
            <li>
              <strong>Periodic Test (Three):</strong> 10%
            </li>
            <li>
              <strong>Notebook Submission:</strong> 5%
            </li>
            <li>
              <strong>Subject Enrichment Activity:</strong> 5%
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">
            Compulsory Subjects – Classes I to X
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-sm md:text-base">
              <thead className="bg-[#1F386B] text-white">
                <tr>
                  <th className="px-4 py-2 border">Class</th>
                  <th className="px-4 py-2 border">Subjects</th>
                </tr>
              </thead>
              <tbody className="text-[#1F386B]">
                <tr className="border">
                  <td className="px-4 py-2 border font-semibold">I & II</td>
                  <td className="px-4 py-2 border">
                    English, Hindi, Maths, EVS, G.K., Computer
                  </td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border font-semibold">III & IV</td>
                  <td className="px-4 py-2 border">
                    Hindi, English, Maths, Science, S.Science, G.K., Computer,
                    Value Education, Drawing
                  </td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border font-semibold">V</td>
                  <td className="px-4 py-2 border">
                    Hindi, English, Maths, Science, S.Science, G.K., Computer,
                    Sanskrit, Value Education, Drawing
                  </td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border font-semibold">VI to VIII</td>
                  <td className="px-4 py-2 border">
                    Hindi, English, Maths, Science, S.Science, G.K., Computer,
                    Sanskrit, Drawing
                  </td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border font-semibold">IX & X</td>
                  <td className="px-4 py-2 border">
                    Hindi/Sanskrit, English, Maths, Science, S.Science,
                    Information Technology
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">CLASSES XI–XII</h3>
          <p className="text-lg">
            Cycle tests/unit tests and term examinations are conducted.
          </p>
          <p className="text-lg">
            The school offers five subjects at the +2 stage from the following
            streams:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f0f4fb] p-4 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Science</h4>
              <p>
                <strong>Compulsory:</strong> English, Physics, Chemistry, Phy.
                Edu./Computer Sc.
              </p>
              <p>
                <strong>Optional:</strong> Biology / Economics / Mathematics
              </p>
              <p>
                <strong>6th Subject:</strong> Phy. Edu. / Computer Sc. / Hindi
              </p>
            </div>

            <div className="bg-[#f0f4fb] p-4 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Commerce</h4>
              <p>
                <strong>Compulsory:</strong> English, Business Studies,
                Accountancy, Economics
              </p>
              <p>
                <strong>Optional:</strong> Maths / Phy. Edu. / Info. Practice /
                Multimedia & Web Tech
              </p>
              <p>
                <strong>6th Subject:</strong> Same options + Hindi
              </p>
            </div>

            <div className="bg-[#f0f4fb] p-4 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Humanities</h4>
              <p>
                <strong>Compulsory:</strong> English, Hindi, Political Science,
                Phy. Edu.
              </p>
              <p>
                <strong>Optional:</strong> History / Geography
              </p>
              <p>
                <strong>6th Subject:</strong> Phy. Edu. / Info. Practice /
                Multimedia & Web Tech
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fef9f3] border-l-4 border-[#1F386B] p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-3">Promotion Policy</h3>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              Promotion is based on continuous evaluation: class tests,
              assignments, projects, classroom observation, and life skills.
            </li>
            <li>
              Promotion to class XII is based on aggregate marks from UTs and
              term exams.
            </li>
            <li>
              Minimum pass percentage:{" "}
              <strong>33% in each subject and in aggregate</strong>.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Curriculum;
