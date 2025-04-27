import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import admissionImg from '../assets/admission14.png';

export default function AdmissionBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <AnimatePresence>
      {show && (
        // Translucent backdrop only
        <motion.div
          className="
            fixed inset-0
            bg-black/50     /* 50% translucent black */
            backdrop-blur-sm
            flex items-center justify-center
            z-50
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {/* Card is fully opaque */}
          <motion.div
            className="
              bg-white         /* solid white */
              rounded-lg
              overflow-hidden
              shadow-2xl
              max-w-sm w-full mx-4
            "
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <img
              src={admissionImg}
              alt="Admissions Open"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-[#1F386B] mb-2">
                Admissions Open 2025-26
              </h2>
              <p className="text-gray-700 mb-4">
                Secure your child’s future today—spots are filling fast!
              </p>
              <button
                onClick={() => setShow(false)}
                className="
                  px-5 py-2
                  bg-[#1F386B] text-white
                  rounded-full
                  hover:bg-opacity-90
                  transition
                "
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
