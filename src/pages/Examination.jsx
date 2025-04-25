import React, {useState} from "react";

const Examination = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleSection = (section) => {
    setIsOpen((prev) => ({...prev, [section]: !prev[section]}));
  };

  const termDates = [
    ["Periodic Test I", "15th July to 2nd August, 2021 (Class I to X & XII)"],
    ["Periodic Test II", "20th Sept to 4th October, 2021 (Class I to X & XII)"],
    ["Periodic Test II", "18th Oct to 3rd Nov, 2021 (Class X & XII)"],
    ["Periodic Test II", "16th Nov to 1st Dec, 2021 (Class I to IX & XI)"],
    ["Pre-Board I Examination", "15th Nov to 1st Dec, 2021"],
    ["Pre-Board II Examination", "27th Dec, 2021 to 10th Jan, 2022"],
  ];

  const ptmDates = [
    ["7th August, 2021 (Saturday)", "For Nur to X & XII"],
    ["4th September, 2021 (Saturday)", "Only for Class XI"],
    ["6th November, 2021 (Saturday)", "Only for Class X & XII"],
    ["4th Dec, 2021 (Saturday)", "For Nur to IX & XI"],
    ["15th Jan, 2022 (Saturday)", "Only for Class X & XII"],
    ["22nd Jan, 2022 (Saturday)", "For Nur to IX & XI"],
  ];

  const periodicTestIClassesItoXII = [
    [
      "15/07/2021 (Thursday)",
      "Comp",
      "Comp",
      "Comp",
      "Comp",
      "Hindi",
      "Hindi",
      "Social Sc.",
      "Science",
      "Info. Tech.",
      "Info. Tech.",
      "English",
    ],
    [
      "19/07/2021 (Monday)",
      "Maths",
      "English",
      "EVS",
      "Maths",
      "Science",
      "Science",
      "Science",
      "Hindi",
      "Social Sc.",
      "Social Sc.",
      "Maths/Bio",
    ],
    [
      "22/07/2021 (Thursday)",
      "EVS",
      "Maths",
      "Science",
      "Hindi",
      "Social Sc.",
      "Social Sc.",
      "Science",
      "Maths",
      "Science",
      "Maths",
      "Accounts/Chem./Geo./History",
    ],
    [
      "26/07/2021 (Monday)",
      "Hindi",
      "Hindi",
      "Maths",
      "Social Sc.",
      "Maths",
      "Maths",
      "Sanskrit",
      "English",
      "Hindi",
      "Economics",
      "B.St./Physics/Pol. Sc.",
    ],
    [
      "29/07/2021 (Thursday)",
      "English",
      "G.K. (Oral)",
      "G.K. (Oral)",
      "English",
      "Hindi",
      "English",
      "Hindi",
      "Maths",
      "CS/Info. Prac.",
      "CS/Info. Prac.",
      "CS/Info. Prac./Phy. Edn.",
    ],
  ];

  const unitTestIClassX = [
    ["12/08/2021 (Thursday)", "Maths/Biology"],
    ["16/08/2021 (Monday)", "English"],
    ["20/08/2021 (Friday)", "Accounts/Chem./Geo./History"],
    ["23/08/2021 (Monday)", "B.St./Physics/Pol. Sc."],
    ["25/08/2021 (Wednesday)", "CS/Info. Prac./Phy. Edn."],
  ];

  const halfYearlyClassesItoXII = [
    [
      "20-9-2021 (Monday)",
      "Comp",
      "Comp",
      "Comp",
      "Comp",
      "Sanskrit",
      "Hindi",
      "Maths",
      "Info. Tech.",
      "Info. Tech.",
      "English",
    ],
    [
      "22-9-2021 (Wednesday)",
      "Draw",
      "Draw",
      "Draw",
      "Draw",
      "Hindi",
      "Sanskrit",
      "English",
      "Hindi",
      "Sanskrit",
      "CS/Info. Prac./Phy./Phy. Edn.",
    ],
    [
      "25-9-2021 (Saturday)",
      "G.K/O",
      "G.K/O",
      "Hindi",
      "Hindi",
      "Maths",
      "Science",
      "Hindi",
      "Science",
      "Social Sc.",
      "B.St./Phy./Pol. Sc.",
    ],
    [
      "28-9-2021 (Tuesday)",
      "Hindi",
      "Eng",
      "Maths",
      "Social Sc.",
      "Science",
      "Maths",
      "Science",
      "Social Sc.",
      "Science",
      "Accounts/Chem./Geo./History",
    ],
    [
      "1-10-2021 (Friday)",
      "Maths",
      "EVS",
      "Social Sc.",
      "Science",
      "Social Sc.",
      "Social Sc.",
      "Sanskrit",
      "English",
      "Hindi",
      "Maths/Biology",
    ],
    [
      "4-10-2021 (Monday)",
      "EVS",
      "Hindi",
      "English",
      "Maths",
      "English",
      "English",
      "Social Sc.",
      "Maths",
      "Accounts/Geo./Pol. Sc./History",
      "Economics/Hindi",
    ],
  ];

  const periodicTestIIClassesItoXIXI = [
    [
      "16/11/2021 (Tuesday)",
      "Comp",
      "Comp",
      "Comp",
      "Comp",
      "Maths",
      "Hindi",
      "Social Sc.",
      "Science",
      "Info. Tech.",
      "Maths",
    ],
    [
      "20/11/2021 (Saturday)",
      "Maths",
      "English",
      "EVS",
      "Maths",
      "English",
      "Science",
      "Maths",
      "Maths",
      "English",
      "Accounts/Chem./Geo./History",
    ],
    [
      "23/11/2021 (Tuesday)",
      "EVS",
      "Maths",
      "Science",
      "Hindi",
      "Social Sc.",
      "Social Sc.",
      "Hindi",
      "English",
      "Sanskrit",
      "B.St./Pol. Sc./Physics",
    ],
    [
      "26/11/2021 (Friday)",
      "Hindi",
      "G.K. (Oral)",
      "G.K. (Oral)",
      "English",
      "Hindi",
      "Sanskrit",
      "Science",
      "Hindi",
      "Social Sc.",
      "Economics/Hindi",
    ],
    [
      "29/11/2021 (Monday)",
      "English",
      "Hindi",
      "English",
      "Social Sc.",
      "Science",
      "English",
      "Sanskrit",
      "Social Sc.",
      "Science",
      "CS/Info. Prac./Phy. Edn.",
    ],
  ];

  const periodicTestIIClassesXandXII = [
    ["18/10/2021 (Monday)", "Maths", "Accounts/Chem./Geo./Hist."],
    ["21/10/2021 (Thursday)", "English", "B.St./Pol. Sc./Physics"],
    ["25/10/2021 (Monday)", "Hindi", "Economics/Hindi"],
    ["28/10/2021 (Thursday)", "Social Sc.", "Maths/Biology"],
    ["31/10/2021 (Monday)", "Science", "CS/Info. Prac./Phy. Edn."],
  ];

  const preBoardIClassesXandXII = [
    ["15/11/2021 (Monday)", "Science", "Maths/Biology"],
    ["18/11/2021 (Thursday)", "English", "CS/Info. Prac./Phy. Edn."],
    ["22/11/2021 (Monday)", "Maths", "Economics/Hindi"],
    ["25/11/2021 (Thursday)", "Hindi", "B.St./Pol. Sc./Physics"],
    ["29/11/2021 (Monday)", "Social Sc.", "Accounts/Chem./Geo./History"],
  ];

  const preBoardIIClassesXandXII = [
    ["27/12/2021 (Monday)", "Science", "Maths/Biology"],
    ["30/12/2021 (Thursday)", "English", "Economics/Hindi"],
    ["3/01/2022 (Monday)", "Maths", "Accounts/Chem./Geo./Hist."],
    ["8/01/2022 (Saturday)", "Hindi", "Social Sc."],
    ["10/01/2022 (Monday)", "Social Sc.", "B.St./Pol. Sc./Physics"],
  ];

  const sections = [
    {
      title: "Examination Schedule",
      headers: ["Examination", "Date"],
      rows: termDates,
    },
    {title: "PTM Schedule", headers: ["Date", "Details"], rows: ptmDates},
    {
      title:
        "Date Sheet of Periodic Test-I/Unit Test-I (2021-22) Class I - X & XII",
      headers: [
        "Date & Day",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XII",
      ],
      rows: periodicTestIClassesItoXII,
    },
    {
      title: "Date Sheet - Unit Test-I (2021-22) Class X",
      headers: ["Date & Day", "Class X"],
      rows: unitTestIClassX,
    },
    {
      title: "Date Sheet of Half Yearly Examination (2021-22) Class I - XII",
      headers: [
        "Date & Day",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XII",
      ],
      rows: halfYearlyClassesItoXII,
    },
    {
      title:
        "Date Sheet of Periodic Test-II/Unit Test-II (2021-22) Class I - IX & XI",
      headers: [
        "Date & Day",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "XI",
      ],
      rows: periodicTestIIClassesItoXIXI,
    },
    {
      title:
        "Date Sheet of Periodic Test-II/Unit Test-II (2021-22) Class X & XII",
      headers: ["Date & Day", "Class X", "Class XII"],
      rows: periodicTestIIClassesXandXII,
    },
    {
      title: "Datesheet for Pre-Board Examination - I (2021-22) Class X/XII",
      headers: ["Date & Day", "Class X", "Class XII"],
      rows: preBoardIClassesXandXII,
    },
    {
      title: "Datesheet for Pre-Board Examination - II (2021-22) Class X/XII",
      headers: ["Date & Day", "Class X", "Class XII"],
      rows: preBoardIIClassesXandXII,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <style>
        {`
          .section-header {
            background: linear-gradient(to right, #1F386B, #2a4a9b);
            transition: background 0.3s ease;
          }
          .section-header:hover {
            background: linear-gradient(to right, #1a2f5b, #1F386B);
          }
          .table-row {
            background-color: #ffffff;
          }
          .table-row:hover {
            background-color: #e6eaf3;
            transform: scale(1.01);
            transition: all 0.2s ease;
          }
          .table-header {
            background: linear-gradient(to right, #1F386B, #2a4a9b);
          }
          .collapsible-content {
            transition: max-height 0.3s ease-in-out;
          }
        `}
      </style>

      <h1 className="text-2xl sm:text-4xl font-bold text-center text-[#1F386B] mb-8">
        Examination Schedule (2021-2022)
      </h1>

      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <div
            className="section-header text-white text-lg sm:text-xl font-bold p-4 rounded-t-lg cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection(index)}
          >
            <span>{section.title}</span>
            <span>{isOpen[index] ? "▲" : "▼"}</span>
          </div>
          <div
            className={`collapsible-content overflow-hidden ${
              isOpen[index] ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="bg-white p-4 rounded-b-lg shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="table-header text-white">
                      {section.headers.map((header, hIndex) => (
                        <th
                          key={hIndex}
                          className="p-3 text-left text-sm sm:text-base font-semibold"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, rIndex) => (
                      <tr key={rIndex} className="table-row border-b">
                        {row.map((cell, cIndex) => (
                          <td
                            key={cIndex}
                            className="p-3 text-sm sm:text-base text-[#1F386B] font-medium"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Examination;
