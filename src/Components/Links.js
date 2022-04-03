import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="Mission">
      {/* <h3 className="R">"Radiant is a Website for Conciousness Expansion"</h3> */}
      <Link className="People" to="/people">
        People
      </Link>
      <Link className="Books" to="/books">
        Books
      </Link>
      <Link className="Art" to="/art">
        Art
      </Link>
      <Link className="Drugs" to="/drugs">
        Drugs
      </Link>
      <Link className="Politics" to="/politics">
        Politics
      </Link>
      <Link className="Culture" to="/culture">
        Culture
      </Link>
      <Link className="Language" to="/language">
        Language
      </Link>
      <Link className="Sprituality" to="/sprituality">
        Sprituality
      </Link>
      <Link className="Communication" to="/communication">
        Communication
      </Link>
      <Link className="Archeology" to="/archeology">
        Archeology
      </Link>
      <Link className="Technology" to="/technology">
        Technology
      </Link>
      <Link className="Astrology" to="/astrology">
        Astrology
      </Link>
      <Link className="Philosophy" to="/philosophy">
        Philosophy
      </Link>
      <Link className="History" to="/history">
        History
      </Link>
      <Link className="Coding" to="/coding">
        Coding
      </Link>
      <Link className="Geometry" to="/geometry">
        Geometry
      </Link>
      <Link className="Psychology" to="/psychology">
        Psychology
      </Link>
      <Link className="Gastronomy" to="/gastronomy">
        Gastronomy
      </Link>
      <Link className="Engineering" to="/engineering">
        Engineering
      </Link>
      <Link className="Management" to="/management">
        Management
      </Link>
      {/* <Link to="/AboutUs">
        <button onClick={AboutUS}>About Us</button>
      </Link> */}
    </div>
  );
};

export default Links;
