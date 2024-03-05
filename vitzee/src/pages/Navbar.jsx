import { Link } from "react-router-dom";
import "./Navbar.Module.css";
import { useState } from "react";

function Navbar() {
  const [toggleOptions, setToggleOption] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <h1 className="primary-heading">VITzee</h1>
        <ul className="features">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/academics">
              Academics
            </Link>
          </li>
          <li>
            <Link className="link" to="/events">
              Events
            </Link>
          </li>
        </ul>
        <div
          className="profile"
          onClick={() => setToggleOption((e) => !e)}
        ></div>
        <div className={toggleOptions ? "account show" : "account"}>
          <Link className="link" to="/logout">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
