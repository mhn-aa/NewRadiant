import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import "./Drugs.js";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Links from "./Components/Links";
import { People } from "@material-ui/icons";
import { Books } from "./Components/Books";

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
        {/* <Route path="/books">
          <Books />
        </Route> */}
        <Route path="/" exact>
          <div className="body">
            <p>Back to Radiant</p>
            <p>
              This is the place where you can see my truest feelings and
              thoughts
            </p>
            <p>
              There is something which prevents me to do complete some tasks.
              Potentially related to my root.
            </p>
            <p>I am radiant. I am Love. I am whole. I trust. I am ...</p>
            <p>
              2-Dec-2021 Dreams - Media is ruining the conciousness. I did not
              give her my number for my second chakra.
            </p>
            <p>
              Day by day I more realize how stupid we humans are and the
              stupidity of our race.
            </p>
          </div>
          <div className="footer"></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
