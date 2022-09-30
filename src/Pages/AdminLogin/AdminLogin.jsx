import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.scss";

function AdminLogin() {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();
    if (name == "Masood" && password == "adminBoard") {
      Navigate(`/dashboard/${password}`);
    } else {
      alert("Please! Provide Valid Credentials.");
    }
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <img src="brandLogo.png" alt="logo" />
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name..."
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password..."
          />
          <button
            type="submit"
            onClick={(e) => login(e)}
            style={{ backgroundColor: "green" }}
          >
            Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
