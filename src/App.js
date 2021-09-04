import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StopIcon from "@material-ui/icons/Stop";
import { Button } from "@material-ui/core";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div>
      <div className="header">
        <div className="left1">
          <h1>R</h1>
        </div>
        <div className="left2">
          <h3>Menu</h3>
        </div>
        <div className="left3">
          <h1>P</h1>
        </div>
        <div className="center1">
          <a class="Radiant" href="./index.html">
            <h1>RADIANT</h1>
          </a>
        </div>
        <div className="right3">
          <VisibilityIcon className="eye" />
        </div>
        <div className="right2">
          <h1>ET</h1>
        </div>
        <div className="right1">
          <h4>Alimo</h4>
        </div>
        <div className="generosity0">
          <h1>F1</h1>
        </div>
        <div className="generosity-1">
          <h1>F2</h1>
        </div>
        <div className="generosity-2">
          <h1>F3</h1>
        </div>
        <div className="generosity-3">
          <button>Log in</button>
        </div>
      </div>

      <div className="body">
        <p>body</p>
      </div>
      <div className="footer">
        <p>footer</p>
      </div>
    </div>
  );
}

export default App;
