// LoginPage.js
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    // For demonstration purposes, let's assume the login is successful if username and password are not empty
    if (username.trim() !== "" && password.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="login-page">
      <h1>CHAITIME LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
