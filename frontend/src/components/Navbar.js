// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link
          to="/"
          className="logo-link"
        ></Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list-jobs">Job Listings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
