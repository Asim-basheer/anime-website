import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/anime-website">
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
