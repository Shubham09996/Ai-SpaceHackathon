import { useRef } from "react";

export default function UploadSection({ setImage, onFileUpload }) {
  const fileInputRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // show uploaded image
      onFileUpload(file); // start detection
    }
  };

  return (
    <div className="w-full max-w-xl">
      <h2 className="text-xl font-semibold mb-4 text-white">🪐 Upload Space Image</h2>

      {/* Upload Box with Hover Effect */}
      <div
        className="border-2 border-dashed border-gray-600 rounded-lg bg-black/30 h-80 flex flex-col justify-center items-center text-center px-4
                   transition-all duration-300 hover:border-purple-500 hover:bg-black/50 hover:shadow-lg hover:scale-[1.01]"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          ref={fileInputRef}
        />

        <label className="cursor-pointer block" onClick={() => fileInputRef.current.click()}>
          <div className="text-5xl mb-4">⬆️</div>
          <p className="text-lg font-medium">Drag and drop or click to upload</p>
          <p className="text-sm text-gray-400">Supports JPG, PNG, WEBP up to 10MB</p>
        </label>
      </div>

      {/* Button with Enhanced Hover */}
      <div className="flex justify-center">
        <button
          className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg 
                     transition-transform duration-300 transform hover:scale-110 hover:brightness-110 shadow-md cursor-pointer"
          onClick={() => fileInputRef.current.click()}
        >
          Choose Image
        </button>
      </div>
    </div>
  );
}
