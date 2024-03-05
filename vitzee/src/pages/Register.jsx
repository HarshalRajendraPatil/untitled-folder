import { Link, useNavigate } from "react-router-dom";
import "./Auth.Module.css";
import { useState } from "react";

export default function Register() {
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
      <img className="image" src="./authbg.png" />;
    </div>
  );
}

function FieldArea() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
            <p>Full Name</p>
            <input
              className="enter"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="email"
              placeholder="Full Name"
            ></input>
          </div>
          <div>
            <p>Email Id</p>
            <input
              className="enter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="E-mail"
            ></input>
          </div>
          <div>
            <p>Password</p>
            <input
              className="enter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="email"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <p className="error">{error}</p>
        <button
          className="btn"
          onClick={() => handleRegister(name, email, password)}
        >
          Sign Up
        </button>
        <div className="alter">
          <p>
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
