import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const Navigate = useNavigate();

  let [useremailattrib, useremail] = useState("");
  let [userpasswordattrib, userpassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const email = useremailattrib;
    const password = userpasswordattrib;

    const res = await fetch("https://cwmstorebackend.herokuapp.com/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = res.json();

    if (data) {
      Navigate("/");
    }
    if (!data) {
      Navigate("/signup");
    }
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src="brandLogo.png" alt="logo" />
        <form method="POST">
          <input
            value={useremailattrib}
            onChange={(e) => {
              useremail(e.target.value);
            }}
            type="text"
            placeholder="Enter Your Email..."
          />
          <input
            value={userpasswordattrib}
            onChange={(e) => {
              userpassword(e.target.value);
            }}
            type="password"
            placeholder="Enter Your Password..."
          />
          <button type="submit" onClick={login}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
