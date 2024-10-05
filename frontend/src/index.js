import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";

const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Render your app
root.render(<App />);
