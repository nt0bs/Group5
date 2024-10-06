import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import AddJob from "./components/Addjob";
import JobDetails from "./components/Jobdetails";
import "./App.css";
import { ListJobs } from "./components/Listjobs";
import Navbar from "./components/Navbar";
import axios from "axios";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const baseUrl = "http://localhost:5000";

  useEffect(() => {
    // Fetch data from the Flask backend
    axios
      .get(`${baseUrl}/jobs`)
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the jobs!", error);
      });
  }, []);

  const addJob = (job) => {
    axios
      .post(`${baseUrl}/add_job`, job)
      .then((response) => {
        setJobs([...jobs, { id: jobs.length + 1, ...job }]);
      })
      .catch((error) => {
        console.error("There was an error adding a job!", error);
      });
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
          path="*"
          element={<HomePage jobs={jobs} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
