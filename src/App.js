import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import "./Drugs.js";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Links from "./Components/Links";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  return (
    <Router>
      <Header />
      <Links />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <div className="body">
            <p>
              I was happy to have that excess coffee. That Addict type thing.
            </p>
            <p>Metaphore</p>
            <p>Time travel</p>
            <p>forward scape</p>
            <p>siren</p>
            <p>Generation of the perfect tool</p>
            <p>self transcendance</p>
          </div>

          <div></div>
          <div className="footer"></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
