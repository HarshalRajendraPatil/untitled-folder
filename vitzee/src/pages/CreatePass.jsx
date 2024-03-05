// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Auth.Module.css";
import { useState } from "react";

export default function CreatePass() {
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
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  return (
    <div className="left">
      <div className="heading">
        <span>VITzee</span>
      </div>
      <h2>Welocme to Social Impact!</h2>
      <div className="details">
        <div className="fieldEntry">
          <div>
            <p>Enter OTP</p>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              name="otp"
              placeholder="OTP"
              className="enter"
            ></input>
          </div>
          <div>
            <p>New Password</p>
            <input
              className="enter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
            ></input>
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              className="enter"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
              name="password"
              placeholder="Confirm password"
            ></input>
          </div>
        </div>
        <p className="error"></p>
        <button className="btn">Change Password</button>
        <div className="alter">
          <p>
            <Link className="link" to="/login">
              &larr; SingIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
