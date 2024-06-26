import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from "./AuthProvider";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src="/logo192x100.png" alt="Logo" className="logo" />
        </Link>
        <Link to="/movies" className="nav-button">
          Movies
        </Link>
        <Link to="/tvshows" className="nav-button">
          TV Shows
        </Link>
      </div>
      <div className="header-right">
        {user ? (
          <>
            <Link to="/userinfo" className="nav-button">
              {user.email}
            </Link>
            <button onClick={logout} className="nav-button">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">
              Log In
            </Link>
            <Link to="/signup" className="nav-button">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
