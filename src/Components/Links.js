import { People } from "@material-ui/icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Links = () => {
  const People = () => {
    console.log("clicked");
  };
  const Books = () => {
    console.log("clicked");
  };
  const Art = () => {
    console.log("clicked");
  };
  const Drugs = () => {
    console.log("clicked");
  };
  const Politics = () => {
    console.log("clicked");
  };
  const Culture = () => {
    console.log("clicked");
  };
  const Language = () => {
    console.log("clicked");
  };
  const Sprituality = () => {
    console.log("clicked");
  };
  const Communication = () => {
    console.log("clicked");
  };
  const Archeology = () => {
    console.log("clicked");
  };
  const Technology = () => {
    console.log("clicked");
  };
  const Astrology = () => {
    console.log("clicked");
  };
  const Philosophy = () => {
    console.log("clicked");
  };
  const History = () => {
    console.log("clicked");
  };
  const Coding = () => {
    console.log("clicked");
  };
  const Geometry = () => {
    console.log("clicked");
  };
  const Psychology = () => {
    console.log("clicked");
  };
  const Gastronomy = () => {
    console.log("clicked");
  };
  const Engineering = () => {
    console.log("clicked");
  };
  const Management = () => {
    console.log("clicked");
  };

  return (
    <Switch>
      <div className="Mission">
        <h3 className="R">
          "Radiant is a Website for Conciousness Expansion."
        </h3>
        <Link to="/people">
          <button className="People" onClick={People}>
            People
          </button>
        </Link>
        <Link to="/Books">
          <button className="Books" onClick={Books}>
            Books
          </button>
        </Link>
        <Link to="/Art">
          <button className="Art" onClick={Art}>
            Art
          </button>
        </Link>
        <Link to="/Drugs">
          <button className="Drugs" onClick={Drugs}>
            Drugs
          </button>
        </Link>
        <Link to="/Politics">
          <button className="Politics" onClick={Politics}>
            Politics
          </button>
        </Link>
        <Link to="/Culture">
          <button className="Culture" onClick={Culture}>
            Culture
          </button>
        </Link>
        <Link to="/Language">
          <button className="Language" onClick={Language}>
            Language
          </button>
        </Link>
        <Link to="/Sprituality">
          <button className="Sprituality" onClick={Sprituality}>
            Sprituality
          </button>
        </Link>
        <Link to="/Communication">
          <button className="Communication" onClick={Communication}>
            Communication
          </button>
        </Link>
        <Link to="/Archeology">
          <button className="Archeology" onClick={Archeology}>
            Archeology
          </button>
        </Link>
        <Link to="/Technology">
          <button className="Technology" onClick={Technology}>
            Technology
          </button>
        </Link>
        <Link to="/Astrology">
          <button className="Astrology" onClick={Astrology}>
            Astrology
          </button>
        </Link>
        <Link to="/Philosophy">
          <button className="Philosophy" onClick={Philosophy}>
            Philosophy
          </button>
        </Link>
        <Link to="/History">
          <button className="History" onClick={History}>
            History
          </button>
        </Link>
        <Link to="/Coding">
          <button className="Coding" onClick={Coding}>
            Coding
          </button>
        </Link>
        <Link to="/Geometry">
          <button className="Geometry" onClick={Geometry}>
            Geometry
          </button>
        </Link>
        <Link to="/Psychology">
          <button className="Psychology" onClick={Psychology}>
            Psychology
          </button>
        </Link>
        <Link to="/Gastronomy">
          <button className="Gastronomy" onClick={Gastronomy}>
            Gastronomy
          </button>
        </Link>
        <Link to="/Engineering">
          <button className="Engineering" onClick={Engineering}>
            Engineering
          </button>
        </Link>
        <Link to="/Management">
          <button className="Management" onClick={Management}>
            Management
          </button>
        </Link>
        {/* <Link to="/About-Us">
          <button onClick={AboutUS}>About Us</button>
        </Link> */}
      </div>
    </Switch>
  );
};

export default Links;
