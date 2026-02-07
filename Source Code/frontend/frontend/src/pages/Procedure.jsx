import React from "react";
import { Brain, BarChart, Workflow, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Procedure() {
  const steps = [
    {
      icon: <Brain className="w-10 h-10 text-blue-600" />,
      title: "Step 1: Data Preprocessing",
      desc: "Clean and prepare datasets (GoEmotions + Jigsaw) by tokenization, text normalization, and splitting for training and testing.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-teal-600" />,
      title: "Step 2: Emotion Classification",
      desc: "Train models (BERT, DistilRoBERTa, FastText, LightGBM, ELECTRA) on GoEmotions to extract calibrated emotional features.",
    },
    {
      icon: <Workflow className="w-10 h-10 text-blue-500" />,
      title: "Step 3: Feature Integration",
      desc: "Pass extracted emotion probabilities as additional features into hate detection pipeline, enriching context.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-teal-700" />,
      title: "Step 4: Hate Speech Detection",
      desc: "Classify text as Hate or Non-Hate using hybrid emotion-calibrated features, improving interpretability and accuracy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-3">
          Research Methodology
        </span>
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          Methodology / Procedure
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The project follows a structured four-step pipeline, integrating
          emotion recognition into hate detection for improved interpretability.
        </p>
      </div>

      {/* Steps */}
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-6 space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-2xl p-6 flex-1 border border-blue-100 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{step.icon}</div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">
                {step.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm text-justify">{step.desc}</p>

              {/* Connector for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-30px] transform -translate-y-1/2">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-teal-400"></div>
                </div>
              )}

              {/* Connector for Mobile */}
              {index < steps.length - 1 && (
                <div className="absolute md:hidden left-1/2 transform -translate-x-1/2 bottom-[-40px]">
                  <div className="w-1 h-10 bg-gradient-to-b from-blue-400 to-teal-400"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
