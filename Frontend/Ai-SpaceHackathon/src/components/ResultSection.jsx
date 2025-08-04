import { useState, useEffect } from "react";

export default function ResultSection({ image, results }) {
  const [loading, setLoading] = useState(true);
  const classMap = ["Fire Extinguisher", "Tool Box", "Oxygen Tank"];

  useEffect(() => {
    if (image) {
      setLoading(true);
      const img = new Image();
      img.src = image;
      img.onload = () => setLoading(false);
    } else {
      setLoading(false);
    }
  }, [image]);

  // Modern file picker to choose save location
  const saveImageToFileSystem = async () => {
    if (!window.showSaveFilePicker) {
      alert("Your browser does not support direct file saving. Try using Chrome.");
      return;
    }

    try {
      const blob = await fetch(image).then((res) => res.blob());

      const handle = await window.showSaveFilePicker({
        suggestedName: "detected-image.png",
        types: [
          {
            description: "PNG Image",
            accept: { "image/png": [".png"] },
          },
        ],
      });

      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      alert("✅ Image saved successfully!");
    } catch (err) {
      console.error("Save cancelled or failed", err);
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-6 pb-5 text-white">✨ Detection Results</h2>

      {/* Loader */}
      {loading && (
        <div className="w-full h-64 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Image Display with hover */}
      {image && !loading && (
        <div
          className="mb-4 border border-gray-700 rounded-lg overflow-hidden max-h-64 flex items-center justify-center 
                     transition duration-300 hover:border-purple-500 hover:shadow-lg hover:scale-[1.01]"
        >
          <img src={image} alt="Processed Result" className="max-h-64 object-contain" />
        </div>
      )}

      {/* Download Button with Save Location */}
      {image && !loading && (
        <div className="flex gap-4 justify-center mb-4">
          <button
            onClick={saveImageToFileSystem}
            className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg 
                       transition-transform duration-300 transform hover:scale-110 hover:brightness-110 shadow-md"
          >
          Save Image
          </button>
        </div>
      )}

      {/* Detection Results */}
      {!loading && results.length > 0 ? (
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
        !loading && (
          <div className="text-gray-400 text-sm h-full flex items-center justify-center">
            Upload an image to start detection.
          </div>
        )
      )}
    </>
  );
}
