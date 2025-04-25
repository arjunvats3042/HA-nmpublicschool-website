import React from "react";
import Carousel from "@/components/ui/carousel";
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";

function GalleryMain() {
  const slideData = [
    {src: img1, title: "Image 1"},
    {src: img2, title: "Image 2"},
    {src: img3, title: "Image 3"},
    {src: img4, title: "Image 4"},
    {src: img5, title: "Image 5"},
    {src: img6, title: "Image 6"},
    {src: img7, title: "Image 7"},
    {src: img8, title: "Image 8"},
    {src: img9, title: "Image 9"},
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center pt-2 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#1F386B] mb-2 text-center">
        Gallery
      </h2>
      <div className="relative w-full max-w-[80vmin] mx-auto flex-1 flex justify-center mt-[-2rem] pt-10">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}

export default GalleryMain;
