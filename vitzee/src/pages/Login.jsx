// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.Module.css";
import { useState } from "react";

export default function Login() {
  return (
    <div className="app">
      <FieldArea />
      <ImageArea />
    </div>
  );
}

function ImageArea() {
  return (
    <div className="imageHolder">
      <img className="image" src="./authbg.png"></img>
    </div>
  );
}

function FieldArea() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (userData) => {
    navigate("/");
  };

  return (
    <div className="left">
      <div className="heading">
        <span>VITzee</span>
      </div>
      <h2>Welocme to Social Impact!</h2>
      <div className="details">
        <div className="fieldEntry">
          <div>
            <p>Email Id</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Registered E-mail"
              className="enter"
            ></input>
          </div>
          <div>
            <p>Password</p>
            <input
              className="enter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <p className="error"></p>
        <button className="btn" onClick={handleRegister}>
          Sign In
        </button>
        <div className="alter">
          <p>
            <Link className="link" to="/register">
              Create Account
            </Link>
          </p>
          <span>
            <Link className="link" to="/forgot-password">
              Forgot Password
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
