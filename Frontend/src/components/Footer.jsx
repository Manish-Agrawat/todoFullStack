import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>© 2024 To-Do-App . All rights reserved.</p>
      <p>
        Built with <span style={{ color: "red" }}>♥</span> by Manish Agrawat
      </p>

      <div className="social-icons">
        <a href="https://www.instagram.com/manish_447_/">
          <i className="bi bi-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/manish-agrawat/">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/Manish-Agrawat">
          <i className="bi bi-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
