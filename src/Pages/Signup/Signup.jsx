import React, { useState } from "react";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";

function Signup() {
  const Navigate = useNavigate();

  const [user, userData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const takeInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    userData({ ...user, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = user;

    const res = await fetch("https://cwmstorebackend.herokuapp.com/signup", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, cpassword }),
    });

    const data = await res.json();

    if (data) {
      Navigate("/login");
    } else {
      alert("Invalid Registration!");
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <img src="brandLogo.png" alt="logo" />
        <form method="POST">
          <input
            onChange={takeInputs}
            type="text"
            name="name"
            value={user.name}
            placeholder="Enter Your Name..."
          />
          <input
            onChange={takeInputs}
            type="email"
            name="email"
            value={user.email}
            placeholder="Enter Your Email..."
          />
          <input
            onChange={takeInputs}
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter Your Password..."
          />
          <input
            onChange={takeInputs}
            type="password"
            name="cpassword"
            value={user.cpassword}
            placeholder="Confirm Password..."
          />
          <button type="submit" onClick={register}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
