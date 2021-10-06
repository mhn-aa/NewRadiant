import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

const Header = () => {
  const Login = () => {
    console.log("clicked");
  };

  return (
    <div className="header">
      <div className="left1"></div>
      <div className="left3"></div>
      <div className="center1">
        <Link to="/">
          <h1 className="Name">EXAMPLE</h1>
        </Link>
      </div>
      <div className="right3"></div>
      <div className="right2"></div>
      <div className="right1"></div>
      <div className="generosity-0"></div>
      <div className="generosity-1"></div>
      <div className="generosity-2"></div>
      <div className="generosity-3">
        <Link to="/login">
          <button onClick={Login}>Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
