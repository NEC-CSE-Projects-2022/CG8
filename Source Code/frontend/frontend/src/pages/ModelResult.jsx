import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ModelResult() {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

  const handleValidate = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("⚠️ Failed to fetch prediction. Is backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
      <div
        className={`w-full ${
          result || loading
            ? "max-w-6xl grid md:grid-cols-2 gap-8"
            : "max-w-3xl"
        }`}
      >
        {/* Form */}
        <motion.div
          layout
          className="bg-white shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Validate Text
          </h1>
          <textarea
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="6"
            placeholder="Enter text to validate..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            onClick={handleValidate}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Validate"}
          </button>

          {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
        </motion.div>

        {/* Results or Loader */}
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loading"
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="animate-spin h-12 w-12 text-blue-600 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              <p className="text-gray-600 font-medium">Analyzing text...</p>
            </motion.div>
          )}

          {result && !loading && (
            <motion.div
              key="results"
              className="bg-white shadow-md rounded-lg p-6"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                Result
              </h1>

              {/* --- Speedometer --- */}
              <div className="flex justify-center mb-10 relative">
                {(() => {
                  const isHate = result.hate_pred === "Hate";

                  // Needle always uses raw hate_prob
                  const needlePercent = result.hate_prob * 100;
                  const angle = (needlePercent / 100) * 180 - 90;

                  // Display logic: Hate -> prob, Non-Hate -> 1 - prob
                  const displayProb = isHate
                    ? result.hate_prob * 100
                    : (1 - result.hate_prob) * 100;

                  return (
                    <div className="relative w-72 h-44">
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <defs>
                          <linearGradient
                            id="gaugeGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="50%" stopColor="#facc15" />
                            <stop offset="100%" stopColor="#dc2626" />
                          </linearGradient>
                        </defs>

                        <path
                          d="M 20 100 A 80 80 0 0 1 180 100"
                          fill="none"
                          stroke="url(#gaugeGradient)"
                          strokeWidth="18"
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* Needle */}
                      <motion.div
                        className="absolute bottom-[18px] left-1/2 origin-bottom w-1.5 h-28 bg-gray-800 rounded-full shadow-md"
                        initial={{ rotate: -90 }}
                        animate={{ rotate: angle }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />

                      {/* Center text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span
                          className={`text-lg font-bold ${
                            isHate ? "text-red-600" : "text-green-600"
                          }`}
                        >
                          {isHate ? "❌ Hate" : "✅ Non-Hate"}
                        </span>
                        <span className="text-gray-700 font-medium">
                          {displayProb.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* --- Donut Chart for Top 5 emotions --- */}
              <h2 className="text-lg font-semibold text-blue-700 mb-4 text-center">
                Top 5 Emotions
              </h2>

              {(() => {
                const emotions = Object.entries(result.emotion_probs)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([emo, prob]) => ({
                    name: emo,
                    value: prob,
                  }));

                return (
                  <div className="flex flex-col items-center">
                    <PieChart width={280} height={280}>
                      <Pie
                        data={emotions}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        stroke="none"
                      >
                        {emotions.map((_, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(val) => `${(val * 100).toFixed(1)}%`}
                      />
                    </PieChart>

                    {/* Legend */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {emotions.map((emo, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span
                            className="inline-block w-4 h-4 rounded-full shadow-sm"
                            style={{ backgroundColor: COLORS[idx] }}
                          ></span>
                          <span className="text-gray-700 text-sm font-medium">
                            {emo.name} ({(emo.value * 100).toFixed(1)}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
