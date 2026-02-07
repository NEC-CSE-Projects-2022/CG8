import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left - Project Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700">
            Rethinking Artificial Empathy
          </h3>
          <p className="text-sm text-gray-600">
            Emotion-Calibrated Hate Detection Models
          </p>
        </div>

        {/* Middle - Navigation Links */}
        <div className="flex gap-6 my-4 md:my-0">
          <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm">
            About
          </Link>
          <Link to="/objectives" className="text-gray-600 hover:text-blue-600 text-sm">
            Objectives
          </Link>
          <Link to="/procedure" className="text-gray-600 hover:text-blue-600 text-sm">
            Procedure
          </Link>
          <Link to="/model-result" className="text-gray-600 hover:text-blue-600 text-sm">
            Model Result
          </Link>
        </div>

        {/* Right - Credits */}
        <div className="text-sm text-gray-600">
          <p>
            <span className="font-medium text-teal-700">Guided by:</span>{" "}
            Shaik Khaja Mohiddin Basha
          </p>
          <p className="mt-1">© 2025 Team Artificial Empathy</p>
        </div>
      </div>
    </footer>
  );
}
