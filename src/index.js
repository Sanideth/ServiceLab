import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Ripple } from "react-preloaders2";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Ripple color="#fff" background="#86c232" />
    <App />
  </React.StrictMode>
);
