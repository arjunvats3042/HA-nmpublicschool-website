import {motion} from "framer-motion";
import React from "react";
import {ImagesSlider} from "./ui/images-slider";
import slide00 from "../assets/slide00.jpg";
import slide01 from "../assets/slide01.jpg";
import slide02 from "../assets/slide02.jpeg";
import slide03 from "../assets/slide03.jpg";
import slide04 from "../assets/slide04.png";
import slide05 from "../assets/slide05.jpg";
import slide06 from "../assets/slide06.jpg";

const HeroSection = () => {
  const images = [
    slide00,
    slide01,
    slide02,
    slide03,
    slide04,
    slide05,
    slide06,
  ];

  return (
    <ImagesSlider
      className="h-[50vh] w-full md:h-screen"
      images={images}
    >
      <motion.div
        initial={{opacity: 0, y: -80}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="z-50 flex flex-col justify-center items-center text-center px-4"
      ></motion.div>
    </ImagesSlider>
  );
};

export default HeroSection;
