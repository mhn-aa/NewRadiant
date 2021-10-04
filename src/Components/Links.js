import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="Mission">
      <h3 className="r">"Radiant is a Website for Conciousness Expansion."</h3>
      <table className="content">
        <tr className="First_raw">
          <td>
            <a href="./People.js">People</a>
          </td>
          <td>
            <a href="./Books.js">Books</a>
          </td>
          <td>
            <a href="./Art.js">Art </a>
          </td>
          <td>
            <a href="./Drugs.js">Drugs </a>
          </td>
          <td>
            <a href="./Politics.js">Politics </a>
          </td>
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
