import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

const Header = () => {
  const Login = () => {
    console.log("clicked");
  };

  return (
    <div className="header">
      <div className="left1">
        <svg width="90" height="90">
          <circle
            cx="45"
            cy="45"
            r="30"
            stroke="Royalblue"
            stroke-width="0"
            fill="orange"
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
          <h1 className="Name">EXAMPLE</h1>
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
