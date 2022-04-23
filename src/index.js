import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/main.scss";

ReactDOM.render(
  <StrictMode>
    <Router basename="/anime-site">
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
