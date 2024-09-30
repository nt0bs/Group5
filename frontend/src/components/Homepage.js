import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to our Job Listing Platform</h1>
      <nav>
        <ul>
          <li>
            <Link to="/add-job">Add New Job</Link>
          </li>
          <li>
            <Link to="/jobs">View Job Listings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Homepage;
