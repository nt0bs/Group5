import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJob = ({ addJob }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({ title, description, category, location });
    navigate("/list-jobs");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginTop: "100px" }}
      className="form-container"
    >
      <h2>Add Job</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default AddJob;
