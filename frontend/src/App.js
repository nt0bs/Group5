import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import AddJob from "./components/Addjob";
import JobDetails from "./components/Jobdetails";
import "./App.css";
import { ListJobs } from "./components/Listjobs";
import Navbar from "./components/Navbar";

const App = () => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, { id: jobs.length + 1, ...job }]);
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
