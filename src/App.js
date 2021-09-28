import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import "./Drugs.js";
import Header from "./Components/Header";
import Login from "./Components/Login";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Radiant /> */}
        <div className="links">
          <div class="first_people">
            <a href="./People.js">People</a>
          </div>
          <div className="first_books">
            <a href="./Books.js">Books</a>
          </div>
          <div className="first_art">
            <a href="./Art.js">Art </a>
          </div>
          <navLink exact activeClassName="active" to="/">
            Drugs{" "}
          </navLink>
          <navLink exact activeClassName="active" to="/">
            Politics{" "}
          </navLink>
          <navLink exact activeClassName="active" to="/">
            Culture{" "}
          </navLink>
          <div className="first_language">
            <a href=".Language.js">Language </a>
          </div>
          <div className="first_sexuality">
            <a href="./Sexuality.js">Sexuality </a>
          </div>
          <div className="first_sprituality">
            <a href="./Sprituality.js">Sprituality </a>
          </div>
          <div className="first_communication">
            <a href="./Communication.js">Communication </a>
          </div>
          <div className="first_archeology">
            <a href="./Archeology.js">Archeology </a>
          </div>
          <div className="first_technology">
            <a href="./Technology.js"> Technology </a>
          </div>
          <div class="first_astrology">
            <a href="./Astrology.js">Astrology</a>
          </div>
          <div class="first_philosophy">
            <a href="./Philosophy.js">Philosophy</a>
          </div>
          <div class="first_coding">
            <a href="./coding.js">Coding</a>
          </div>
          <div class="first_about-us">
            <a href="./About-Us.js">About Us</a>
          </div>
        </div>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <div className="body">
              {/* <h1>R</h1> */}
              {/* <h1>Psychedelics & Coding</h1> */}
              {/* <h2>Translation & Coding</h2> */}
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
                attention is the four Triplicities. These trigons correspond to
                the four ancient elements, and are therefore, Fiery, Earthy,
                Airy and Wa¬ tery. Each triplicity or “Trigon” contains three
                zodiacal signs, 4 times 3 equals 12, the number of the signs of
                the sphere. The Fiery trigon embraces the signs of Aries ( T ),
                Leo (), and Sagittarius ( # ). The Earthy trigon embraces the
                signs Taurus ( S ), Virgo ( rrp ), and Capri¬ corn (V?). The
                Airy trigon embraces the signs Gemini (X), Libra (=£=), and
                Aquarius (^r). The Watery trigon embraces the signs Cancer (E5),
                Scorpio (Til ), and Pisces ( X ), also see page 399, Wilson’s
                Dictionary of Astrology. page 226 light of egypt vol 1, by
                Zanoni, by MHN.
              </p>

              <p>
                The moon is in charge, obviously not in a negative way. We need
                to use our minds better. We need to adapt into this moment. what
                is porn ? why nobody is willing to elaborate on it ? who is
                doing the coding in porn industry ? since it looks like "coding"
                equals to infinite possibilites and potentialiets. why the are
                doing that? I think they call them black hat hackers. what is
                the future of programming? Is it going to be something that
                evebtually destroys us and potentially itself ? or is it going
                to blossom and saves us for exploring higher states.
              </p>
              <p>
                I kinda knew about the fire. but I was not 100% sure. I didnt
                use my intellect. I am aware of some of my own conditions. like
                my spelling problem. I have passions, coding, health and body,
                mind, psychedelics, books, ideas, and all progressive flows of
                the universe. any moment can be the last moment.
              </p>
              <p>
                There are people who have a specific direction in their
                coding.by other means they are doing this in order to gain
                benefit. They are not beings of realization. spritual beings
                offer the fruit of their work to the whole. Library can help us,
                a safe place for a person to self educate. study. Searching for
                real knowledge, astrology. mathematics and geometry.This coding
                phoilosphy is highly related to this feild. Currently it can be
                the nearest to sangsara. love of 10,000 as Terence mentioned.
              </p>
              <p>
                Again. I am back at this again. I am not Radiant now. content of
                our minds. Some simple HTML files. What is React? what is
                JavaScript? is anybody doing python? I personally like git the
                most. I like css too. I am working on this. this is the true me.
              </p>
              <p>
                This new day started by The Text-Book of Astrology by A.J.
                PEARCE. Although it was mentioned by Zanoni in The Light Of
                Egypt Vol 1 that dope addiction is not the way of truth (can't
                remember the exact quote). I had my coffee beside me. I do agree
                with Zanoni. dope addiction is not the way. Furthermore, it was
                mentioned by Maharaji thousands of time. He knows everything.
              </p>
              <p>
                Still struggling with diverse range of matters. At some level
                all these phenomena seem absurd and there is no control from our
                side. However, truth is inside us. it is about "Know thyself".
                There is no externality in this feild. Nothing but all inside
                business. There is no either accidents or problems. It is about
                intuition.
              </p>
              <p>
                Again back at this. another paragraph. lets get back to this
                Radiant thing and do some work in "Drugs.js". Radiant is a big
                project. it is all about learning. and it is a self transforming
                source. Can you all see that login form on top left?
              </p>
              <p>
                Concept and Kian. A short movie which starts with death. Death
                is nearby. and right now is. Death comes with birth.not life.
                life continues. We know that. my body does not like ciggarete
                smokes anymore. It is time for another shift in conciousness. I
                will try to do some job in README.
              </p>
              <p>
                Medication. This is not the way. only self medication is
                effective. I need to detox my body from caffeine and nicotine
                permanently until I am in this body, and have to approach
                cannabis psychedelicly. I can take the first step now. Just
                right now. 9:27 npm start 25th of September 2021. It does not
                matter if I was not able to push some "Logout" commits. I feel I
                am home. I am in my body.
              </p>
              <p>Text book of astrology.</p>
              <p>there is an infinite source.</p>
              <p>
                Today 27th of Sep 2021. Can not really code, or is this a
                thought ? maybe I should get another coffee. Maybe I have to get
                a watch to trace the time. maybe I should excercise.
              </p>
              <p>
                All these useless dates. or maybe usefull. I have this feeling
                of being rightous and, it is not nice. it is ego in itself. This
                text-book of astrology is powerfull.
              </p>
              <p>
                The knowledge that I am carrying is not a selfish one. There is
                nothing to lose. but the way universe plays is not parallel with
                what we think. even in a second.
              </p>
              <p>
                I do not agree with the way the current society is working. Who
                wants to hack me ? There are this majority of people who lost
                the true conevtivity. Or they may be ones who are connected. It
                is not apear due to our limited perception. But the truth is we
                built this faulty system and we are presisted to act that it is
                functioning. form our governments and universities to our big
                and small businesses. banks and inssurance companies. The
                problem is not in their terminology but in their management and
                operations. There is a need for more advanced technologies. At
                this moment.
              </p>
              <h2>Love Everyone & Tell The Truth</h2>
              <p>Faith</p>
              <p>
                I can see everything but I can not know everything. I am only ti
                know this moment without any judgement
              </p>
              <p>These coversations are making us sick.</p>
              <p>Things are really weird on L.S.D</p>
              <p>
                I do not own Radiant. Radiant is here and now. There is a need
                for collaboration.
              </p>
              {/* <h1>Astrology and Astronomy</h1> */}
            </div>
            <div className="footer">
              <p>footer</p>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
