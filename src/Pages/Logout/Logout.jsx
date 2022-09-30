import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const Navigate = useNavigate();

  return (
    <div style={{ padding: "100px 30px", textAlign: "center" }}>
      <div className="emptyCart">
        <h3>You Will Automatically Be Logged Out In 30 Minutes!</h3>
        <button onClick={() => Navigate("/")}>Go Back</button>
      </div>
    </div>
  );
}

export default Logout;
