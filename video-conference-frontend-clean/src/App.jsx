import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";

// 🌐 Navbar
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📹 VidMeet</div>
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/login">➡️ Login</Link></li>
        <li><Link to="/register">👥 Register</Link></li>
        <li><button className="create-room">Create Room</button></li>
      </ul>
    </nav>
  );
}

// 🔐 Login
function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back 👋</h2>
        <div className="input-field">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-btn">Login</button>
        <div className="create-account">
          Create an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

// 🆕 Register
function Register() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Create Account ✨</h2>
        <div className="input-field">
          <input type="text" placeholder="Name" />
        </div>
        <div className="input-field">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-btn">Register</button>
        <div className="create-account">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

// 🚀 App
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
