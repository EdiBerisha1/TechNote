// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import this
import App from "./App";
import "./index.css"; // Or any CSS you're using

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* ✅ Wrap App in a Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
