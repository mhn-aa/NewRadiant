import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import "./Drugs.js";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Links from "./Components/Links";
import { People } from "@material-ui/icons";
import Books from "./Components/Books";
import Art from "./Components/Art";

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
        <Route path="/people">
          <People />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/Art">
          <Art />
        </Route>
        <Route path="/" exact>
          <div className="body">
            <p>
              even if you are silent, people may/can hear you. you are not the
              only one with extraordinary powers. we are all the same.
            </p>
          </div>
          <div className="footer"></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
