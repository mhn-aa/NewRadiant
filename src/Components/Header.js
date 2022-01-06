import { Link } from "react-router-dom";

const Header = ({
  submitHandler2,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <div className="header">
      <div className="left1"></div>
      <div className="left3"></div>
      <div className="center1">
        <Link to="/">
          <h1 className="Name">RADIANT</h1>
        </Link>
      </div>
      <div className="right3"></div>
      <div className="right2"></div>
      <div className="right1"></div>
      <div className="generosity-0"></div>
      <div className="generosity-1"></div>
      <div className="generosity-2"></div>
      <div className="generosity-3">
        <div>
          <form onSubmit={submitHandler2}>
            <div>
              <input
                value={username}
                type="text"
                placeholder="User Name"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div>
              <input
                value={password}
                type="password"
                placeholder="pasword"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
