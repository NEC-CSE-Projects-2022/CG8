import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 px-6">
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-snug">
            Rethinking Artificial Empathy
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Emotion-Calibrated Hate Detection Models
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            <span className="font-semibold text-blue-700">Team Members:</span>{" "}
            Chinmayee Guggilam, Yagnapriya Pichala, Karthika Yadavalli
            <br />
            <span className="font-semibold text-teal-700">Guided by:</span>{" "}
            Shaik Khaja Mohiddin Basha
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/about"
              className="px-6 py-3 rounded-xl border border-blue-600 text-blue-700 font-medium hover:bg-blue-600 hover:text-white transition duration-200"
            >
              📖 Learn More
            </Link>
            <Link
              to="/model-result"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200"
            >
              🚀 Test Model
            </Link>
          </div>
        </motion.div>

        {/* Right - Circular Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
            alt="AI illustration"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white"
          />
        </motion.div>
      </div>
    </div>
  );
}
