import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import AddJob from "./components/Addjob";
import JobDetails from "./components/Jobdetails";
import "./App.css";
import { ListJobs } from "./components/Listjobs";
import EditJob from "./components/Editjob.js";
import Navbar from "./components/Navbar";
import axios from 'axios';

const App = () => {
  const [jobs, setJobs] = useState([]);
 
  useEffect(() => {
    // Fetch jobs from the backend when the component mounts
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://group5-1wvm.onrender.com/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error("An error occurred while fetching jobs: ", error);
      }
    };

    fetchJobs();
  }, []);

  const addJob = async (job) => {
    try {
      // Send a POST request to the backend to add the job
      const response = await axios.post('https://group5-1wvm.onrender.com/api/jobs', job);
      // Update the jobs state with the newly added job
      setJobs([...jobs, response.data]); // Assuming the response contains the created job with an ID
    } catch (error) {
      console.error("There was an error adding the job: ", error);
    }
  };


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/list-jobs"
          element={<ListJobs jobs={jobs} />}
        />
        <Route
          path="/add-job"
          element={<AddJob addJob={addJob} />}
        />
        <Route
          path="/jobs/:id"
          element={<JobDetails jobs={jobs} />}
        />
        <Route 
          path="/edit-job/:id" 
          element={<EditJob jobs = {jobs} setJobs = {setJobs} />} /> {}
        <Route
          path="*"
          element={<HomePage jobs={jobs} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
