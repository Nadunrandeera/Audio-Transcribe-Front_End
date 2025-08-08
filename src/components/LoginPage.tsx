import { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/Input";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg flex max-w-4xl w-full overflow-hidden">
        <div className="w-1/2 p-10 flex flex-col items-center justify-center">
          <div className="flex items-center mb-4">
            {/* <span className="text-blue-600 text-3xl font-bold">
              &#123; &#125;
            </span> */}
            <h1 className="text-3xl font-bold text-gray-800 ml-2">
              🔊 EchoScript
            </h1>
          </div>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Your intelligent audio-to-text transcription service.
          </p>
          <img
            src="./src/assets/Screenshot 2025-08-08 121938.png"
            alt="waveform"
            className="rounded-xl  object-cover w-[300px] h-[300px]"
          />
        </div>

        <div className="w-1/2 bg-white p-10">
          <h2 className="text-3xl font-bold mb-1 flex items-center">Login</h2>
          <p className="text-sm text-gray-500 mb-6 flex items-center gap-2 font-semibold">
            Hello! Let's get started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <p className="flex items-center font-sans text-sm">
                Email Address
              </p>
              <span className="absolute inset-y-0 left-0 pl-3 top-6 flex items-center">
                <Mail className="text-gray-400 w-5 h-5" />
              </span>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            <div className="relative">
              <p className="flex items-center font-sans text-sm">Password </p>
              <span className="absolute inset-y-0 left-0 pl-3 top-4 flex items-center">
                <Lock className="text-gray-400 w-5 h-5 " />
              </span>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow flex justify-center items-center gap-2"
            >
              <span className="text-lg">⇨</span> Login
            </Button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-red-500">{message}</p>
          )}

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 font-medium">
              Sign Up
            </a>
          </p>

          <div className="mt-6 border-t pt-4 text-center">
            <p className="text-sm mb-2 text-gray-500">Or continue with</p>
            <button className="border rounded px-4 py-2 flex items-center mx-auto text-sm">
              {/* <span className="mr-2 bg-black text-white px-2 py-1 rounded">
                G
              </span>{" "} */}
              <img
                src="./src/assets/icons8-google-48.png"
                alt=""
                width={20}
                height={20}
                className="mr-2"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
