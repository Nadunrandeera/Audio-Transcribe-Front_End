import React, { useState } from "react";
import { Button } from "./ui/button";
import { Mail, Lock, User, Mic } from "lucide-react";
import axios from "axios";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const response = await axios.post(
         " http://localhost:8080/api/auth/signup",
         form
       );
       setMessage("Signed up successfully!");
       console.log(response.data);
     } catch (error) {
       setMessage("Failed to sign up. Please try again.");
       console.error(error);
     }
   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl">
        {/* Left Side */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">🔊EchoScript</h1>
          <p className="mb-6 leading-relaxed">
            Transform your audio into accurate text effortlessly. Join
            EchoScript today and experience seamless transcription.
          </p>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/021/874/270/small_2x/equalizer-on-blue-background-music-wave-abstract-digital-audio-track-pulse-of-voice-signal-design-of-spectrum-equaliser-illustration-vector.jpg"
            alt="waveform"
            className="rounded-lg shadow-md w-[400px] h-[300px]"
          />
        </div>

        {/* Right Side */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-3xl font-bold mb-1 flex items-center">Sign Up</h2>
          <p className="text-sm text-gray-500 mb-6 flex items-center gap-2 font-semibold">
            <Mic className="w-4 h-4 " />
            Sign up to transcribe
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <p className="flex items-center font-sans text-sm">User Name </p>
              <User className="absolute left-3 top-8 text-gray-400" />
              <input
                name="name"
                type="text"
                required
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            <div className="relative">
              <p className="flex items-center font-sans text-sm">
                Email Address{" "}
              </p>
              <Mail className="absolute left-3 top-8 text-gray-400" />
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="relative">
              <p className="flex items-center font-sans text-sm">Password </p>
              <Lock className="absolute left-3 top-8 text-gray-400" />
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <Button className="w-full bg-sky-500 text-white font-semibold py-2 rounded-md">
              Sign up
            </Button>
            {message && <p className="text-sm text-center text-red-500">{message}</p>}
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 font-medium">
              Log in
            </a>
          </p>

          <div className="mt-6 border-t pt-4">
            <p className="text-center text-gray-500 text-sm mb-4">
              Or sign up using
            </p>
            <div className="flex justify-center gap-4">
              <button className="w-10 h-10 bg-gray-100 rounded-md">🌐</button>
              <button className="w-10 h-10 bg-gray-100 rounded-md">f</button>
              <button className="w-10 h-10 bg-gray-100 rounded-md">🟩</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
