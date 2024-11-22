"use client";

import React, { useState } from "react";
import axios from "axios";
import Teams from "@/components/teams";

const Home: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processedVideo, setProcessedVideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a video file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://54.202.153.163:8000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setProcessedVideo(`http://54.202.153.163:8000${response.data.processedVideo}`);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload and process the video.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-green-600 to-green-800 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <header className="text-center pt-16 pb-6">
        <h1 className="text-8xl font-extrabold text-black mb-2">People Counter</h1>
        <p className="text-black text-3xl">Major Project</p>
      </header>

      {/* Video Upload Section */}
      <main className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-8 my-8">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">Upload Your Video</h2>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            accept="video/mp4"
            onChange={handleFileChange}
            className="file:bg-green-600 file:text-white file:px-4 file:py-2 file:rounded file:cursor-pointer file:hover:bg-green-700 file:transition-all w-full text-gray-600 border rounded-md p-2"
          />
          <button
            onClick={handleUpload}
            disabled={isLoading}
            className={`px-6 py-3 text-lg font-semibold rounded-md ${
              isLoading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700 transition-all"
            }`}
          >
            {isLoading ? "Processing..." : "Upload and Process"}
          </button>
        </div>
      </main>

      {/* Processed Video Section */}
      {processedVideo && (
        <section className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-8 mt-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Processed Video</h2>
          <video controls className="w-full rounded-lg border-2 border-blue-500">
            <source src={processedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      )}

      {/* Team Section */}
      
        <Teams />
      
    </div>
  );
};

export default Home;