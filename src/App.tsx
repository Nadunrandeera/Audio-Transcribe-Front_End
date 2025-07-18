import React from "react";
import AudioUploader from "./components/AudioUploader";
import Home from "./components/Home";
import AudioTranscriptionPage from "./components/AudioTranscriptionPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
