import React from "react";
import result from "../assets/slide03.jpg"; 

const Results = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        📢 Final Results – Class X & XII (2024–25)
      </h1>

      <div className="w-full max-w-4xl bg-white p-4 shadow-xl rounded-xl">
        <img
          src={result} 
          alt="Class X and XII Results"
          className="w-full h-auto rounded-lg object-contain"
        />
        <p className="text-center text-gray-600 mt-4">
          For detailed individual mark sheets, please contact the school office.
        </p>
      </div>
    </div>
  );
};

export default Results;
