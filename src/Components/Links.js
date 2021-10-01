import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="Mission">
      {/* <svg width="60" height="60">
      <circle
        cx="10"
        cy="30"
        r="20"
        stroke="orange"
        stroke-width="1"
        fill="orange"
      />
      </svg> */}
      <h3 className="r">"Radiant is a Website for Conciousness Expansion."</h3>
      <table className="content">
        <tr className="First_raw">
          <a href="./People.js">People</a>
          <a href="./Books.js">Books</a>
          <a href="./Art.js">Art </a>
          <a href="./Drugs.js">Drugs </a>
          <a href="./Politics.js">Politics </a>
        </tr>
        <tr className="Second_raw">
          <a href="./Culture.js">Culture </a>
          <a href=".Language.js">Language </a>
          <a href="./Sexuality.js">Sexuality </a>
          <a href="./Sprituality.js">Sprituality </a>
          <a href="./Communication.js">Communication </a>
        </tr>
        <tr className="Third_raw">
          <a href="./Archeology.js">Archeology </a>
          <a href="./Technology.js"> Technology </a>
          <a href="./Astrology.js">Astrology</a>
          <a href="./Philosophy.js">Philosophy</a>
          <a href="./History.js">History</a>
        </tr>
        <tr className="Forth_raw">
          <a href="./Coding.js">Coding</a>
          <a href="./Geometry.js">Geometry</a>
          <a href="./Geometry.js">Psychology</a>
          <a href="./Geometry.js">Gastronomy</a>
        </tr>
        <a href="./Geometry.js">About Us</a>
      </table>
    </div>
  );
};

export default Links;
