import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";
import React, {useEffect, useState, useRef} from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchEndX.current - touchStartX.current;
      const threshold = 50;

      if (deltaX > threshold) {
        handlePrevious();
      } else if (deltaX < -threshold) {
        handleNext();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const loadImages = () => {
      setLoading(true);
      const loadPromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = reject;
        });
      });

      Promise.all(loadPromises)
        .then((loadedImages) => {
          setLoadedImages(loadedImages);
          setLoading(false);
        })
        .catch((error) => console.error("Failed to load images", error));
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay]);

  const slideVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center group z-10",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-30">
          <span className="text-lg font-semibold">Loading...</span>
        </div>
      )}
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div className={cn("absolute inset-0 z-20", overlayClassName)} />
      )}
      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="absolute inset-0 w-full h-full object-fill"
            alt={`Slide ${currentIndex + 1}`}
          />
        </AnimatePresence>
      )}
      {areImagesLoaded && (
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 hidden md:block">
          <button
            onClick={handlePrevious}
            className="p-3 bg-gray-500 bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-opacity duration-300 mx-2"
            aria-label="Previous image"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      )}
      {areImagesLoaded && (
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 hidden md:block">
          <button
            onClick={handleNext}
            className="p-3 bg-gray-500 bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-opacity duration-300 mx-2"
            aria-label="Next image"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
