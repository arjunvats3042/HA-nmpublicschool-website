"use client";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import {motion, AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";

export const Gallery = ({testimonials, autoplay = false}) => {
  const [active, setActive] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (autoplay && isMounted) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isMounted, testimonials.length]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  if (!isMounted) {
    return (
      <div className="w-full max-w-[90%] sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 lg:gap-20">
          <div className="relative h-64 sm:h-72 lg:h-96 w-full mx-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
            <img
              src={testimonials[0].src}
              alt=""
              draggable={false}
              className="h-full w-full rounded-3xl object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-between py-4">
            <p className="text-gray-600 dark:text-neutral-300 text-base sm:text-lg lg:text-xl max-w-prose">
              {testimonials[0].text || "Loading testimonial..."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[90%] sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8 sm:py-12 lg:py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 lg:gap-20">
        <div className="w-full mx-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
          <div className="relative h-64 sm:h-72 lg:h-96 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${index}-${testimonial.src}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 45
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 40,
                    rotate: randomRotateY(),
                  }}
                  transition={{duration: 0.4, ease: "easeInOut"}}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt=""
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex gap-3 sm:gap-4 pt-6 justify-center">
            <button
              onClick={handlePrev}
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button transition-all duration-300 hover:scale-110"
            >
              <IconArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button transition-all duration-300 hover:scale-110"
            >
              <IconArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-gray-600 dark:text-neutral-300 text-base sm:text-lg lg:text-xl max-w-prose"
            >
              {testimonials[active].text || "No description available."}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};