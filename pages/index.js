import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold text-white">Welcome to Our App</h1>
      <p className="text-lg text-white mt-2">Seamlessly manage your account with our easy-to-use interface.</p>
      <Link to="/login">
        <Button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200">
          Get Started
        </Button>
      </Link>
    </div>
  );
}

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/token", {
        username: email,
        password: password,
      }, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      localStorage.setItem("token", response.data.access_token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="mt-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm">Don't have an account? </span>
          <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
}

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/register", {
        username,
        email,
        hashed_password: password,
      });
      alert("Registration successful! Please verify your email.");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleRegister} className="mt-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 mb-2 border rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
            Register
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm">Already have an account? </span>
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Future Pages (Color-Coded for Clarity) */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> // Blue */}
        {/* <Route path="/profile" element={<Profile />} /> // Orange */}
        {/* <Route path="/settings" element={<Settings />} /> // Purple */}
        {/* <Route path="/notifications" element={<Notifications />} /> // Red */}
        {/* <Route path="/messages" element={<Messages />} /> // Teal */}
        {/* <Route path="/analytics" element={<Analytics />} /> // Yellow */}
        {/* <Route path="/support" element={<Support />} /> // Brown */}
        {/* <Route path="/about" element={<About />} /> // Gray */}
      </Routes>
    </Router>
  );
}

export default App;
