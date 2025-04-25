import React from "react";

import class1 from "../syllabus/1.pdf";
import class2 from "../syllabus/2.pdf";
import class3 from "../syllabus/3.pdf";
import class4 from "../syllabus/4.pdf";
import class5 from "../syllabus/5.pdf";
import class6 from "../syllabus/6.pdf";
import class7 from "../syllabus/7.pdf";
import class8 from "../syllabus/8.pdf";
import class9 from "../syllabus/9.pdf";
import class10 from "../syllabus/10.pdf";
import class11 from "../syllabus/11.pdf";
import class12 from "../syllabus/12.pdf";
import class13 from "../syllabus/13.pdf";
import class14 from "../syllabus/14.pdf";

const syllabusData = [
  {id: 1, className: "III (Junior School)", pdf: class1},
  {id: 2, className: "IV (Junior School)", pdf: class2},
  {id: 3, className: "V (Junior School)", pdf: class3},
  {id: 4, className: "VI (Secondary School)", pdf: class4},
  {id: 5, className: "VII (Secondary School)", pdf: class5},
  {id: 6, className: "VIII (Secondary School)", pdf: class6},
  {id: 7, className: "IX (Secondary School)", pdf: class7},
  {id: 8, className: "X (Secondary School)", pdf: class8},
  {id: 9, className: "11 ART (HW)", pdf: class9},
  {id: 10, className: "11 COM (HW)", pdf: class10},
  {id: 11, className: "11 SCI (HW)", pdf: class11},
  {id: 12, className: "12 ART (HW)", pdf: class12},
  {id: 13, className: "12 COM (HW)", pdf: class13},
  {id: 14, className: "12 SCI (HW)", pdf: class14},
];

const Syllabus = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#1F386B] mb-10">
          📘 Syllabus Downloads
        </h1>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full table-auto border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#1F386B] text-white text-lg">
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Class</th>
                <th className="px-6 py-3 text-left">Download</th>
              </tr>
            </thead>
            <tbody>
              {syllabusData.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-b ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-[#e6eaf3] transition`}
                >
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 text-gray-800">{item.className}</td>
                  <td className="px-6 py-4">
                    <a
                      href={item.pdf}
                      download={`syllabus-class-${item.id}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#1F386B] text-white px-5 py-2 rounded-full hover:bg-[#2a4a9b] transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      📄 Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {syllabusData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#1F386B] rounded-xl shadow-sm p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between transition hover:shadow-md"
            >
              <div>
                <p className="text-[#1F386B] font-semibold text-lg">
                  {item.className}
                </p>
                <p className="text-sm text-gray-500">S.No: {item.id}</p>
              </div>
              <a
                href={item.pdf}
                download={`syllabus-class-${item.id}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-0 inline-block bg-[#1F386B] text-white px-4 py-2 rounded-full hover:bg-[#2a4a9b] transition duration-200"
              >
                📄 Download
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{``}</style>
    </div>
  );
};

export default Syllabus;
