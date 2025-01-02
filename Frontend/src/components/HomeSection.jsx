import React from "react";
import "../style/HomeSection.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-section">
        <div className="welcome-text">
          <h1>Welcome to Your To-Do Manager</h1>
          <p>
            "Time is precious. Plan your day, accomplish your goals, and take
            control of your productivity!"
          </p>
        </div>

        <div className="about-app">
          <h2>About the App</h2>
          <p>
            This To-Do App is designed to help you stay organized and focused.
            Whether you're managing daily tasks, long-term goals, or personal
            errands, we provide the tools to track and complete them on time.
          </p>
        </div>

        <div className="action-button">
          <Link to="/login" className="btn">
            Create To-Do List
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
