import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

const Header = () => {
  const Login = () => {
    console.log("clicked");
  };

  return (
    <div className="header">
      <div className="left1">
        <svg width="70" height="70">
          <circle
            cx="35"
            cy="35"
            r="30"
            stroke="Royalblue"
            stroke-width="0"
            fill="Royalblue"
          />
        </svg>
        {/* <svg width="100" height="100" className="Cross"></svg> */}
      </div>
      <div className="left2">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div className="left3">
        {/* <Link to="/">
          <svg
            width="400"
            height="180"
            fill="gold"
            stroke="black"
            stroke-width="1"
          >
            <rect x="20" y="67" rx="0" ry="0" width="50" height="50" />
          </svg>
        </Link> */}
      </div>
      <div className="center1">
        <Link to="/">
          <h1>RADIANT</h1>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@1,700&display=swap');
          </style>
        </Link>
      </div>
      <div className="right3">{/* <VisibilityIcon className="eye" /> */}</div>
      <div className="right2">{/* <h1>ET</h1> */}</div>
      <div className="right1">{/* <h4>Alimo</h4> */}</div>
      <div className="generosity-0">{/* <h1>F1</h1> */}</div>
      <div className="generosity-1">{/* <h1>F2</h1> */}</div>
      <div className="generosity-2">{/* <h1>F3</h1> */}</div>
      <div className="generosity-3">
        <Link to="/login">
          <button onClick={Login}>Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
