import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

export const ListJobs = ({ jobs }) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-job");
  };

  return (
    <div className="job-list-container">
      <h2>Job Listings</h2>
      <div>
        <button
          onClick={handleClick}
          className="navigate-button"
        >
          Add New Job
        </button>
      </div>
      <div className="job-list">
        {jobs.length === 0 && <p>Job listing is empty</p>}
        {jobs.length > 0 &&
          jobs.map((job) => (
            <div
              key={job.id}
              className="job-card"
            >
              <h3 className="job-title">
                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
              </h3>
              <p className="job-company">
                <strong>Category:</strong> {job.category}
              </p>
              <p className="job-location">
                <strong>Location:</strong> {job.location}
              </p>
              <Link to={`/edit-job/${job.id}`} className="edit-link">
                Edit Job Listing
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
