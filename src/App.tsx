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
      {/* <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes> */}
      <SignUpPage />

    </>
  );
};

export default App;
