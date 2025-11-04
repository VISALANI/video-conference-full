import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";

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

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
