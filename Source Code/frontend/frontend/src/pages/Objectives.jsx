import React from "react";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function Objectives() {
  const objectives = [
    "Develop a two-stage emotion-calibrated hate detection model.",
    "Enhance interpretability of hate detection through emotion features.",
    "Improve robustness and accuracy over baseline models.",
    "Support responsible AI in online moderation platforms.",
    "Bridge affective computing with practical content moderation systems.",
    "Contribute to digital well-being and safer online interactions.",
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-3">
          Research Goals
        </span>
        <h2 className="text-4xl font-extrabold text-blue-700 mb-3">
          Objectives
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our project aims to advance hate speech detection by integrating
          emotion recognition, improving both accuracy and social
          responsibility.
        </p>
      </div>

      {/* Objectives Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {objectives.map((obj, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-start space-x-4">
              {/* Icon inside circle */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 shadow-inner">
                <Lightbulb className="text-blue-600 w-6 h-6" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{obj}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
