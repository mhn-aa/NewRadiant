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
        <h1>R</h1>
        <h1>Psychedelics & Coding</h1>
        <h2>Translation & Coding</h2>
        {/* <p>ترگمان و ترجمیار</p>
        <p>فرکانس بالا ست یا با این</p>
        <p>هنوز میاد بوی دود ماشین</p>
        <p>هنوز بوی دود سم او</p>
        <p>بوی دود کاری</p>
        <p>بوی خوی خانه</p>
        <p>باید رفت</p> */}
      </div>
      <div>
        <p>
          The next great subject which requires the student’s thoughtful
          attention is the four Triplicities. These trigons correspond to the
          four ancient elements, and are therefore, Fiery, Earthy, Airy and Wa¬
          tery. Each triplicity or “Trigon” contains three zodiacal signs, 4
          times 3 equals 12, the number of the signs of the sphere. The Fiery
          trigon embraces the signs of Aries ( T ), Leo (), and Sagittarius ( #
          ). The Earthy trigon embraces the signs Taurus ( S ), Virgo ( rrp ),
          and Capri¬ corn (V?). The Airy trigon embraces the signs Gemini (X),
          Libra (=£=), and Aquarius (^r). The Watery trigon embraces the signs
          Cancer (E5), Scorpio (Til ), and Pisces ( X ), also see page 399,
          Wilson’s Dictionary of Astrology. page 226 light of egypt vol 1, by
          Zanoni, by MHN{" "}
        </p>
        <p>
          Three fiery elements plus and earthly element. and the when had this
          fire. complexity all over this moment. In other words, rapid occurance
          of change in individual experience. discordination btw elements of the
          body. Coding is helping. Co-star interpreted that there is power in
          sexuality.
        </p>
        <p>
          The moon is in charge, obviously not in a negative way. We need to use
          our minds better. We need to adapt into this moment. what is porn ?
          why nobody is willing to elaborate on it ? who is doing the coding in
          porn industry ? since it looks like "coding" equals to infinite
          possibilites and potentialiets. why the are doing that? I think they
          call them black hat hackers. what is the future of programming? Is it
          going to be something that evebtually destroys us and potentially
          itself ? or is it going to blossom and saves us for exploring higher
          states.
        </p>
        <p>
          I kinda knew about the fire. but I was not 100% sure. I didnt use my
          intellect. I am aware of some of my own conditions. like my spelling
          problem. I have passions, coding, health and body, mind, psychedelics,
          books, ideas, and all progressive flows of the universe. any moment
          can be the last moment.
        </p>
        <h1>Astrology and Astronomy</h1>
      </div>
      <div className="footer">
        <p>footer</p>
      </div>
    </div>
  );
}

export default App;
