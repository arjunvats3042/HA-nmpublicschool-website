import React from "react";

const Mycard = ({imageSrc, buttonLabel}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 transition-transform transform hover:scale-105">
      <div className="p-4 bg-gray-200 rounded-t-lg">
        <img
          className="w-full h-48 object-cover"
          src={imageSrc}
          alt="Card image"
        />
      </div>
      <div className="p-6">
        <button className="px-4 py-2 w-45 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Mycard;
