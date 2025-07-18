import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {

const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); // Default role
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          username,
          email,
          password,
          role,
        }
      );

      if (response.status === 201) {
        setMessage("✅ SignUp Successfully");
      } else {
        setMessage("❌ SignUp Failed");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        setMessage("⚠️ Username or Email Already Exists");
      } else {
        setMessage("❌ Server Error");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
      <p className="text-sm opacity-50 mb-6">Create your account</p>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
        onSubmit={handleSignup}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="shadow border rounded w-full py-2 px-3"
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Sign Up
        </button>
      </form>

      {message && <p className="text-sm text-center text-red-600">{message}</p>}

      <p className="text-center text-gray-500 text-xs mt-4">
        &copy;2025 Echo Script. All rights reserved.
      </p>
      <p>
        Already have an account?{" "}
        <a className="text-blue-500 font-semibold" href="/login">
          Login
        </a>
      </p>
    </div>
  );
};

export default SignUp;
