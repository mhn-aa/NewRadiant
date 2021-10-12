import { People } from "@material-ui/icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <Switch>
      <div className="Mission">
        <h3 className="r">
          "Radiant is a Website for Conciousness Expansion."
        </h3>
        <Link to="/people">
          <button onClick={People}>People</button>
        </Link>
        <Link to="/Books">
          <button onClick={People}>Books</button>
          {/* <p>Be Here Now</p> */}
          {/* <p>The Light of Egypt</p> */}
          {/* <p>The Power of Now</p> */}
          {/* <p>New Earth</p> */}
          {/* <p>Hermetica</p> */}
          {/* <p>Text Book of Astrology</p> */}
        </Link>
        <Link to="/">
          <button onClick={People}>Art</button>
        </Link>
        <Link to="/">
          <p>Drugs</p>
        </Link>
        <Link to="/">
          <p>Politics</p>
        </Link>
        <Link to="/">
          <p>Culture</p>
        </Link>
        <Link to="/">
          <p>Language</p>
        </Link>
        <Link to="/">
          <p>Sprituality</p>
        </Link>
        <Link to="/">
          <p>Communication</p>
        </Link>
        <Link to="/">
          <p>Archeology</p>
        </Link>
        <Link to="/">
          <p>Technology</p>
        </Link>
        <Link to="/">
          <p>Astrology</p>
        </Link>
        <Link to="/">
          <p>Philosophy</p>
        </Link>
        <Link to="/">
          <p>History</p>
        </Link>
        <Link to="/">
          <p>Coding</p>
        </Link>
        <Link to="/">
          <p>Geometry</p>
        </Link>
        <Link to="/">
          <p>Psychology</p>
        </Link>
        <Link to="/">
          <p>Gastronomy</p>
        </Link>
        {/* <Link to="/About-Us">
          <button onClick={AboutUS}>About Us</button>
        </Link> */}
      </div>
    </Switch>
  );
};

export default Links;
