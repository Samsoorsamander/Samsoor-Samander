import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./containers";
import { Analytics } from "@vercel/analytics/react"; // Add this import
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Analytics /> {/* Add this line */}
  </React.StrictMode>
);
