import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="menu">
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/tvshows">TV Shows</a>
      </div>
      <div className="social-media">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
