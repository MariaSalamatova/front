import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AutthContext";
function Header(props) {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handlLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <header className="top-nav">
      <section className="auth">
        {isAuthenticated ? (
          <>
            <h2>
              Welcome <span id="userDisplay">{user}</span>
            </h2>
            <button onClick={handlLogout}>Logoutt</button>
          </>
        ) : (
          <button onClick={() => navigate("/login")}>Login / Register</button>
        )}
        {/* <div id="accountContainer">
          <h2>
            Welcome, <span id="userDisplay"></span>!
          </h2>
        </div> */}
      </section>
      <section className="buttons">
        <Link to="/">
          {" "}
          <button>Main</button>
        </Link>
        {/* Hide from non login user */}
        <Link to="/Forum">
          <button>Forum</button>
        </Link>
        <Link to="/PullCounter">
          <button>Pull counter</button>
        </Link>
      </section>
    </header>
  );
}

export default Header;
