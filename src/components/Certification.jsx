import React from "react";
import { motion } from "framer-motion";
import { CERTIFICATION } from "../constants";

const Certification = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container mx-auto px-4 py-16 border-b border-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h1>

      <div className="max-w-5xl mx-auto">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
          {CERTIFICATION.map((certification, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white-0 rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <h6 className="font-semibold text-xl mb-2 text-center">
                {certification.title}
              </h6>
              <p className="text-gray-600 mb-4 text-center">{certification.issuer}</p>

                <a
                  href={certification.certificate}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab(certification.certificate);
                  }}
                  className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                >
                  View Certificate
                </a>
            
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;