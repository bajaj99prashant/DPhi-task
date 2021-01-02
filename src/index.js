import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProvideNotes from "./DataLayer";

ReactDOM.render(
  <React.StrictMode>
    <ProvideNotes>
      <App />
    </ProvideNotes>
  </React.StrictMode>,
  document.getElementById("root")
);
