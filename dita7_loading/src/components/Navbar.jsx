// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css"; // importojmë CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Home</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      
      </ul>

    </nav>
  );
}

export default Navbar;