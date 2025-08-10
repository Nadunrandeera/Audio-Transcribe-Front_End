import axios from "axios";
import { ArrowLeft, FileDown, FileText } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

export default function AudioTranscriptionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleTranscription = async () => {
    if (!file) return;
    setLoading(true);
    setError("");
    setTranscript("");
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/audio/transcribe",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setTranscript(response.data);
    } catch (err) {
      setError("Error transcribing audio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const exportAsTxt = () => {
    const blob = new Blob([transcript], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transcription.txt";
    link.click();
  };

  const exportAsPdf = () => {
    const blob = new Blob([transcript], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transcription.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl text-center">
        <div className="text-left mb-4">
          <a href="/">
            <ArrowLeft className="text-blue-500 cursor-pointer" />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-blue-700 mb-1">EchoScript</h1>
        <p className="text-gray-500 mb-6">
          Your reliable audio to text transcriber.
        </p>

        <div className="text-left mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Choose Audio File
          </label>
          <div className="flex items-center border rounded-lg p-3 bg-gray-50">
            <span className="mr-3">🎵</span>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-md"
            >
              Choose File
            </label>
            <span className="ml-3 text-sm text-gray-500">
              {file ? file.name : "No file chosen"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 my-6">
          <div onClick={exportAsTxt} className="cursor-pointer text-center">
            <FileText className="mx-auto text-gray-600" />
            <p className="text-sm mt-2">Export as TXT</p>
          </div>
          <Button
            onClick={handleTranscription}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md"
            disabled={loading || !file}
          >
            {loading ? "Transcribing..." : "Upload and Transcribe"}
          </Button>
          <div onClick={exportAsPdf} className="cursor-pointer text-center">
            <FileDown className="mx-auto text-gray-600" />
            <p className="text-sm mt-2">Export as PDF</p>
          </div>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="text-left">
          <h2 className="text-lg font-semibold mb-2">Transcription Result</h2>
          <textarea
            className="w-full h-40 p-4 border border-gray-300 rounded-lg bg-gray-50 resize-none text-sm"
            value={transcript}
            readOnly
            placeholder="Your transcription will appear here..."
          ></textarea>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          © 2025 EchoScript. All rights reserved.
        </p>
      </div>
    </div>
  );
}
