import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

const Header = () => {
  const Login = () => {
    console.log("clicked");
  };

  return (
    <div className="header">
      <div className="left1">
        <svg width="100" height="96">
          <circle
            cx="50"
            cy="50"
            r="27"
            stroke="royalblue"
            stroke-width="1.5"
            fill="silver"
          />
        </svg>
      </div>
      <div className="left2">
        <h3>Menu</h3>
      </div>
      <div className="left3">
        <Link to="/">
          <h1>
            <svg
              width="400"
              height="180"
              fill="gold"
              stroke="black"
              stroke-width="1"
            >
              <rect x="20" y="69" rx="0" ry="0" width="50" height="50" />
            </svg>
          </h1>
        </Link>
      </div>
      <div className="center1">
        <Link to="/">
          <h1>RADIANT</h1>
        </Link>
      </div>
      <div className="right3">
        <VisibilityIcon className="eye" />
      </div>
      <div className="right2">
        <h1>ET</h1>
      </div>
      <div className="right1">
        <h4>Alimo</h4>
      </div>
      <div className="generosity0">
        <h1>F1</h1>
      </div>
      <div className="generosity-1">
        <h1>F2</h1>
      </div>
      <div className="generosity-2">
        <h1>F3</h1>
      </div>
      <div className="generosity-3">
        <Link to="/login">
          <button onClick={Login}>Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
