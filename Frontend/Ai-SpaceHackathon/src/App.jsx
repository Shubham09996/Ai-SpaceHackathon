import { useState } from "react";
import UploadSection from "./components/UploadSection";
import ResultSection from "./components/ResultSection";
import AispacestationBG from "./assets/AispacestationBG.mp4";

export default function App() {
  const [results, setResults] = useState([]);
  const [image, setImage] = useState(null);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    setResults([]);
    setImage(null);

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResults(data.detections);
      setImage(`http://localhost:5000${data.image_path}`);
    } catch (err) {
      console.error("Prediction failed:", err);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden">
      {/* 🌌 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src={AispacestationBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔮 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-purple-900/80 z-[-1]" />

      {/* 🌟 Main Content */}
      <div className="relative z-10 flex-grow px-4 py-10 w-full max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mt-15 mb-10 ">
          <div className="text-4xl md:text-6xl font-extrabold text-pink-500 flex justify-center items-center gap-3 drop-shadow-lg">
            <span>🔭</span> <span>Astro Vision</span>
          </div>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Advanced AI-powered space object detection system. Upload astronomical images to
            identify and classify celestial objects with cutting-edge machine learning.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-300">
            <span>✨ AI-Powered Detection</span>
            <span>🪐 Real-time Analysis</span>
            <span>✔ High Accuracy</span>
          </div>
        </div>

        {/* Upload + Result Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload Box */}
          <div className="bg-gray-900/70 backdrop-blur rounded-xl p-6 shadow-lg flex flex-col justify-center min-h-[500px] h-full">
            <UploadSection onFileUpload={handleImageUpload} setImage={setImage} />
          </div>

          {/* Result Box */}
          <div className="bg-gray-900/70 backdrop-blur rounded-xl p-6 shadow-lg flex flex-col justify-start min-h-[500px] h-full">
            <ResultSection image={image} results={results} />
          </div>
        </div>

        {/* Extra Info Boxes */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-black/30 backdrop-blur p-4 rounded-xl border border-gray-700">
            <h3 className="text-yellow-400 font-bold text-lg">🅰 Asteroids</h3>
            <p className="text-sm text-gray-300">Rocky objects</p>
          </div>
          <div className="bg-black/30 backdrop-blur p-4 rounded-xl border border-gray-700">
            <h3 className="text-green-400 font-bold text-lg">🛰 Satellites</h3>
            <p className="text-sm text-gray-300">Artificial objects</p>
          </div>
        </div>
      </div>

      {/* 🔻 Footer */}
      <footer className="mt-auto text-center text-xs text-gray-400 bg-black/50 py-2 rounded">
        <p>Made with 💡 during the HackWithIndia Hackathon</p>
        <p>© 2025 SkyWatch AI Team. All rights reserved.</p>
      </footer>
    </div>
  );
}
