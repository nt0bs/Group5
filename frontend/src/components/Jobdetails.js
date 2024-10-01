import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobDetails = ({ jobs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((job) => job.id === parseInt(id));

  useEffect(() => {
    if (!job) {
      // Redirect to home if job is not found
      navigate("/");
    }
  }, [job, navigate]);

  return (
    <div className="job-detail-container">
      <h2>{job.title}</h2>
      <p>
        <strong>Category:</strong> {job.category}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Description:</strong> {job.description}
      </p>
    </div>
  );
};

export default JobDetails;
