import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Header(props) {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handlLogout = () => {
    logout();
    navigate("/");
  };
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handlLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <header className="top-nav">
      <section className="buttons">
        <Link to="/">
          {" "}
          <button>Main</button>
        </Link>
        {isAuthenticated && (
          <>
            <Link to="/Forum">
              <button>Forum</button>
            </Link>
            <Link to="/PullCounter">
              <button>Pull counter</button>
            </Link>
          </>
        )}
      </section>
      <section className="auth">
        {isAuthenticated ? (
          <>
            <h2>
              <span id="userDisplay">{user}</span>
            </h2>
            <button onClick={handlLogout}>Log out</button>
          </>
        ) : (
          <button onClick={() => navigate("/login")}>Login / Register</button>
        )}
      </section>
    </header>
  );
}

export default Header;
