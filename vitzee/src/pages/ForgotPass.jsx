// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Auth.Module.css";
import { useState } from "react";

export default function ForgotPassword() {
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
  const [email, setEmail] = useState("");

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
        </div>
        <p className="error"></p>
        <button className="btn">Send Otp</button>
        <div className="alter">
          <p>
            <Link className="link" to="/login">
              &larr; SignIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
