import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="top-nav">
      <section className="auth">
        <button>Login / Register</button>

        <div id="authContainer">
          <h2>Login Register</h2>
          <input type="text" id="username" placeholder="Username" />
          <input type="password" id="password" placeholder="Password" />
          <button>Register</button>
          <button>Login</button>
        </div>

        <div id="accountContainer">
          <h2>
            Welcome, <span id="userDisplay"></span>!
          </h2>
          <button>Logout</button>
        </div>
      </section>
      <section className="buttons">
        {/* <a href="pull counter/site.html">
          <button>pull counter</button>
        </a>
        <a href="forum/site.html">
          <button>forum</button>
        </a> */}
        <Link to="/">Main</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/pull-counter">Pull counter</Link>
      </section>
    </header>
  );
}

export default Header;
