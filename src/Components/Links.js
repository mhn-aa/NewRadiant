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
          <button onClick={Books}>Books</button>
        </Link>
        <Link to="/Art">
          <button onClick={Art}>Art</button>
        </Link>
        <Link to="/Drugs">
          <button onClick={Drugs}>Drugs</button>
        </Link>
        <Link to="/Politics">
          <button onClick={Politics}>Politics</button>
        </Link>
        <Link to="/Culture">
          <button onClick={Culture}>Culture</button>
        </Link>
        <Link to="/Language">
          <button onClick={Language}>Language</button>
        </Link>
        <Link to="/Sprituality">
          <button onClick={Sprituality}>Sprituality</button>
        </Link>
        <Link to="/Communication">
          <button onClick={Communication}>Communication</button>
        </Link>
        <Link to="/Archeology">
          <button onClick={Archeology}>Archeology</button>
        </Link>
        <Link to="/Technology">
          <button onClick={Technology}>Technology</button>
        </Link>
        <Link to="/Astrology">
          <button onClick={Astrology}>Astrology</button>
        </Link>
        <Link to="/Philosophy">
          <button onClick={Philosophy}>Philosophy</button>
        </Link>
        <Link to="/History">
          <button onClick={History}>History</button>
        </Link>
        <Link to="/Coding">
          <button onClick={Coding}>Coding</button>
        </Link>
        <Link to="/Geometry">
          <button onClick={Geometry}>Geometry</button>
        </Link>
        <Link to="/Psychology">
          <button onClick={Psychology}>Psychology</button>
        </Link>
        <Link to="/Gastronomy">
          <button onClick={Gastronomy}>Gastronomy</button>
        </Link>
        {/* <Link to="/About-Us">
          <button onClick={AboutUS}>About Us</button>
        </Link> */}
      </div>
    </Switch>
  );
};

export default Links;
