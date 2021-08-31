import logo from "./logo.svg";
import "./App.css";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StopIcon from "@material-ui/icons/Stop";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div>
      <div className="header">
        <div className="left1">
          <h1>R</h1>
        </div>
        <div className="left2">
          <h3>Menu</h3>
        </div>
        <div className="left3">
          <h1>P</h1>
        </div>
        <div className="center1">
          <a class="Radiant" href="./index.html">
            <h1>RADIANT</h1>
          </a>
        </div>
        <div className="right3">
          <VisibilityIcon className="eye" />
        </div>
        <div className="right2">
          <h1>ET</h1>
        </div>
        <div className="right1"></div>
        <div className="generosity0"> </div>
        <div className="generosity-1"> </div>
        <div className="generosity-2"> </div>
        <div className="generosity-3">
          <button>Log in</button>
        </div>
      </div>

      <div className="body">
        <p>body</p>
      </div>
      <div className="div">
        <p>footer</p>
      </div>
    </div>
  );
}

export default App;
