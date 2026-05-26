import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  return (
    <main className={`error-page ${darkMode ? "dark" : ""}`}>
      <div className="container">
        <div className="eyes">
          <div className="eye">
            <div className="eye__pupil eye__pupil--left"></div>
          </div>

          <div className="eye">
            <div className="eye__pupil eye__pupil--right"></div>
          </div>
        </div>

        <div className="error-page__heading">
          <h1 className="error-page__heading-title">
            Looks like you're lost
          </h1>

          <p className="error-page__heading-description">
            404 Error
          </p>
        </div>

        <button
          className="error-page__button"
          onClick={() => navigate("/")}
        >
          Back To Home
        </button>
      </div>

      <button
        className="color-switcher"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </main>
  );
};

export default NotFound;