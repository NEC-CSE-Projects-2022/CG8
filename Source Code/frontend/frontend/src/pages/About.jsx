import React from "react";
import { HeartHandshake, Brain, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-3">
          Project Overview
        </span>
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
          About the Project
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Rethinking Artificial Empathy with Emotion-Calibrated Hate Detection Models
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex items-start gap-4 hover:shadow-lg transition">
            <Brain className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">
              This project introduces a{" "}
              <span className="font-semibold text-blue-700">
                two-stage pipeline
              </span>{" "}
              that integrates emotion recognition with hate speech detection.
              The first stage employs advanced NLP models to extract
              fine-grained emotional features. These features serve as an
              intermediate representation to calibrate hate detection,
              significantly enhancing interpretability and accuracy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex items-start gap-4 hover:shadow-lg transition">
            <ShieldCheck className="w-10 h-10 text-teal-600 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">
              By bridging{" "}
              <span className="font-semibold text-teal-600">
                affective computing
              </span>{" "}
              and hate speech moderation, our framework provides a more
              empathetic and socially responsible approach to harmful content
              detection. Applications include{" "}
              <span className="font-semibold">online platforms</span>,{" "}
              <span className="font-semibold">moderation systems</span>, and{" "}
              <span className="font-semibold">digital well-being initiatives</span>.
            </p>
          </div>
        </motion.div>

        {/* Right - Icon/Illustration */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-12 rounded-full shadow-xl hover:shadow-2xl transition">
            <HeartHandshake className="w-40 h-40 text-blue-700" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
