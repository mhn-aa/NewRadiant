import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="Mission">
      <h3 className="R">"Radiant is a Website for Conciousness Expansion"</h3>

      <Link className="People" to="/people">
        People
      </Link>
      <Link to="/books">
        <button className="Books">Books</button>
      </Link>
      <Link to="/art">
        <button className="Art">Art</button>
      </Link>
      <Link to="/drugs">
        <button className="Drugs">Drugs</button>
      </Link>
      <Link to="/politics">
        <button className="Politics">Politics</button>
      </Link>
      <Link to="/culture">
        <button className="Culture">Culture</button>
      </Link>
      <Link to="/language">
        <button className="Language">Language</button>
      </Link>
      <Link to="/sprituality">
        <button className="Sprituality">Sprituality</button>
      </Link>
      <Link to="/communication">
        <button className="Communication">Communication</button>
      </Link>
      <Link to="/archeology">
        <button className="Archeology">Archeology</button>
      </Link>
      <Link to="/technology">
        <button className="Technology">Technology</button>
      </Link>
      <Link to="/astrology">
        <button className="Astrology">Astrology</button>
      </Link>
      <Link to="/philosophy">
        <button className="Philosophy">Philosophy</button>
      </Link>
      <Link to="/history">
        <button className="History">History</button>
      </Link>
      <Link to="/coding">
        <button className="Coding">Coding</button>
      </Link>
      <Link to="/geometry">
        <button className="Geometry">Geometry</button>
      </Link>
      <Link to="/psychology">
        <button className="Psychology">Psychology</button>
      </Link>
      <Link to="/gastronomy">
        <button className="Gastronomy">Gastronomy</button>
      </Link>
      <Link to="/engineering">
        <button className="Engineering">Engineering</button>
      </Link>
      <Link to="/management">
        <button className="Management">Management</button>
      </Link>
      {/* <Link to="/About-Us">
          <button onClick={AboutUS}>About Us</button>
        </Link> */}
    </div>
  );
};

export default Links;
