import React from "react";

const Tc = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white py-4 bg-gradient-to-r from-[#1F386B] to-[#2a4a9b] rounded-t-lg">
          Transfer Certificate
        </h1>

        <div className="p-6">
          <div className="mb-4">
            <label
              htmlFor="tcNo"
              className="block text-gray-700 font-medium mb-2"
            >
              Enter your TC No.
            </label>
            <input
              type="text"
              id="tcNo"
              placeholder="TC Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F386B] transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1F386B] hover:bg-[#2a4a9b] text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tc;
