import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Links from "./Components/Links";
import People from "./Components/People";
import Books from "./Components/Books";
import Art from "./Components/Art";
import Drugs from "./Components/Drugs";
import Politics from "./Components/Politics";
import Culture from "./Components/Culture";
import Language from "./Components/Language";
import Sprituality from "./Components/Sprituality";
import HaveIdeaContactUs from "./Components/HaveIdeaContactUs";
// import Communication from "./Components/Communication";
// import Archeology from "./Components/Archeology";
// import Technology from "./Components/Technology";
// import Astrology from "./Components/Astrology";
// import Philosophy from "./Components/Philosophy";
// import History from "./Components/History";
// import Coding from "./Components/Coding";
// import Geometry from "./Components/Geometry";
// import Psychology from "./Components/Psychology";
// import Gastronomy from "./Components/Gastronomy";
// import Engineering from "./Components/Engineering";
// import Management from "./Components/Management";

function App() {
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("", yourName, "", email, "", message);
    setYourName("");
    setEmail("");
    setMessage("");
  };

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
        <Route path="/Drugs">
          <Drugs />
        </Route>
        <Route path="/Politics">
          <Politics />
        </Route>
        <Route path="/Culture">
          <Culture />
        </Route>
        <Route path="/Language">
          <Language />
        </Route>
        <Route path="/Sprituality">
          <Sprituality />
        </Route>
        <Route path="/" exact>
          <div className="body">
            <p>
              even if you are silent, people may/can hear you. you are not the
              only one with extraordinary powers. we are all the same.
            </p>
          </div>
          <HaveIdeaContactUs
            yourName={yourName}
            email={email}
            message={message}
            submitHandler={submitHandler}
            setYourName={setYourName}
            setEmail={setEmail}
            setMessage={setMessage}
          />
          <div className="footer"></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
