import React from "react";

export default function ResultSection({ image, results }) {
  const classMap = ["Fire Extinguisher", "Tool Box", "Oxygen Tank"];

  return (
    <>
      <h2 className="text-xl font-semibold mb-6 pb-5">✨ Detection Results</h2>

      {image && (
        <div className="mb-4 border border-gray-700 rounded-lg overflow-hidden max-h-64 flex items-center justify-center">
          <img src={image} alt="Processed Result" className="max-h-64 object-contain" />
        </div>
      )}

      {results.length > 0 ? (
        <ul className="text-sm text-left text-gray-300 space-y-2">
          {results.map((res, idx) => (
            <li key={idx} className="border-b border-gray-700 pb-1">
              <span className="text-yellow-400 font-semibold">
                {classMap[res.class] || "Unknown Object"}
              </span>{" "}
              – Confidence: {(res.confidence * 100).toFixed(1)}%
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-400 text-sm h-full flex items-center justify-center">
          Upload an image to start detection.
        </div>
      )}
    </>
  );
}
