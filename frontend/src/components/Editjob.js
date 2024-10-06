import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import './Editjob.css';

const EditJob = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const [job, setJob] = useState({ title: "", category: "", location: "", description: ""});
  const navigate = useNavigate();

  // Fetch the job details
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/jobs/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error("An error occurred while fetching the job:", error);
      }
    };

    fetchJob();
  }, [id]);

// Handle input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setJob((prevJob) => ({ ...prevJob, [name]: value }));
};

 // Handle deletion of the job
 const handleDelete = async () => {
  try {
    await axios.delete(`http://127.0.0.1:5000/api/jobs/${id}`);
    setJob(prevJobs => prevJobs.filter(job => job.id !== id));
    navigate('/list-jobs'); // Navigate back to the job list
  } catch (error) {
    console.error("An error occurred while deleting the job:", error);
  }
};

  // Handle form submission for updating the job
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await axios.put(`http://127.0.0.1:5000/api/jobs/${id}`, job); // Send PUT request to update job
      // Optionally, update the job in the list if necessary
      setJob((prevJobs) => prevJobs.map((j) => (j.id === parseInt(id) ? job : j))); // Update the job in the state
      navigate('/list-jobs'); // Redirect after update
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

 

  
return(
  <div className="form-container">
      <h2>Edit Job Listing</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-field">
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            id="title"
            name="title" // Use name attribute for controlled components
            value={job.title}
            onChange={handleChange}
          />
        </div>
       
        <div className="form-field">
          <label htmlFor="location">location:</label>
          <textarea
            id="location"
            name="location"
            value={job.location}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-field">
          <label htmlFor="category">Category:</label>
          <textarea
            id="category"
            name="category"
            value={job.category}
            onChange={handleChange}
          ></textarea>
        </div>
        

        <div className="form-field">
          <label htmlFor="description">Job Description:</label>
          <textarea
            id="description"
            name="description"
            value={job.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="button-container">
          <button type="submit" className="update-button">Update</button>
          <button type="button" className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default EditJob;