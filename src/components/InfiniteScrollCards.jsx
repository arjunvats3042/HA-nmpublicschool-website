import React from "react";
import vision from "@/assets/vision.jpg";
import chairman from "@/assets/chairman.png";
import principal from "@/assets/principal.jpg";

const cards = [
  {
    imageSrc: vision,
    title: "Our Vision & Mission",
    description:
      "To provide a platform for every student to reach their potential. Our focus is to serve quality education.",
  },
  {
    imageSrc: chairman,
    title: "Chairman's Message",
    description:
      "Education is the basis of all progress. Experience has taught us that progress is possible only through education.",
  },
  {
    imageSrc: principal,
    title: "Principal's Message",
    description:
      "Education is not merely acquiring facts but values that help us improve different facets of mankind.",
  },
];

const InfiniteScrollCards = () => {
  const repeatedCards = [...cards, ...cards];

  return (
    <div className="relative overflow-hidden max-w-5xl mx-auto py-10">
      <div className="flex w-max animate-scroll">
        {repeatedCards.map((card, index) => (
          <div
            key={index}
            className="w-80 min-w-[20rem] mx-4 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.imageSrc}
              alt={card.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollCards;
