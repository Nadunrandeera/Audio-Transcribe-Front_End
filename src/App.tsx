import React from "react";
import AudioUploader from "./components/AudioUploader";
import AudioTranscriptionPage from "./components/AudioTranscriptionPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/transcription" element={<AudioTranscriptionPage />} />
      </Routes>
    </>
  );
};

export default App;
