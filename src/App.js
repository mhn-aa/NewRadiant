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
          <div className="body"></div>
          <div>
            <p>There is an Obligation to UNDERSTAND. Getting smarter.</p>
            <p>
              Relax and concentrate your soul on your solar plexus, Saying the
              MantRAM, "My soul is one with the universe and my spirit an
              emanation from God," then ask yourself, who am I? What have I
              been?and what I must become?
            </p>
            <p>
              Four Triplicities. These trigons correspond to , Fiery, Earthy,
              Airy and Watery. Each triplicity or “Trigon” contains three
              zodiacal signs, 4 times 3 equals 12, the number of the signs of
              the sphere.
              <p>
                The Fiery 🔥 trigon embraces the signs of Aries ♈︎, Leo ♌︎,
                and Sagittarius ♐︎.{" "}
              </p>
              <p>
                The Earthy 🌍 trigon embraces the signs Taurus ♉︎, Virgo ♍︎,
                and Capricorn ♑︎.
              </p>
              <p>
                The Airy 🌬️ trigon embraces the signs Gemini ♊︎, Libra ♎︎, and
                Aquarius ♒︎.
              </p>
              <p>
                he Watery 🌊 trigon embraces the signs Cancer ♋︎, Scorpio ♏︎,
                and Pisces ♓︎.
              </p>
              see page 399, Wilson’s Dictionary of Astrology. page 226 light of
              egypt vol 1, by Zanoni, by MHN.
            </p>

            <h2>Love Everyone & Tell The Truth</h2>
            <p>Faith</p>

            <p>Pro Psychedelic Orianted</p>
          </div>
          <div className="footer">
            <p>footer</p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
