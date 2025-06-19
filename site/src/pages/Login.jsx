import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import "./Login.css";

function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 2) {
      return setError("Username must be 2 or more characters");
    }
    if (password.length < 6) {
      return setError(setError("password must be 6 or more characters"));
    }
    login(username);
    navigate("/");
  };
  return (
    <>
      <h2>Login page/ Register</h2>
      <form onSubmit={handleSubmit}>
        <div id="authContainer">
          <input
            value={username}
            type="text"
            id="username"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />
          <input
            value={password}
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login/ Register</button>
        </div>
      </form>
      {error && (
        <p style={{ color: "red", fontWeight: "bold", fontSize: "25px" }}>
          {error}
        </p>
      )}
    </>
  );
}

export default Login;
