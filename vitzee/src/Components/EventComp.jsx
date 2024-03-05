import React from "react";
import "./EventStyles.Module.css";
import { Link } from "react-router-dom";

const Events = ({ heading, description, link, url }) => {
  return (
    <div className="main-container">
      <div className="event-section">
        <div className="event-content">
          <div className="popular-section">
            <div className="popular-text child">{heading}</div>
          </div>

          <div>
            <p className="event-description"> {description} </p>
          </div>

          <div>
            <h1 className="bottom-text">
              {" "}
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLScXZRZe8D5vK5ti-dZtxaz0kbZQkjxZqUYQpHvKcPwDhbpPow/viewform">
                {link}
              </Link>{" "}
            </h1>
          </div>
        </div>

        <div>
          <img className="event-image" alt="Event images" src={url} />
        </div>
      </div>
    </div>
  );
};

export default Events;
