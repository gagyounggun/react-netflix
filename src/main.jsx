// App.jsx 또는 main.jsx
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/react-netflix">
    <App />
  </BrowserRouter>
);
