import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Dashboard.scss";

function Dashboard() {
  const Navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const DashboardPageLoaded = () => {
    if (params.password != "adminBoard") {
      Navigate("/adminlogin");
    } else {
      console.log("You Have Been Successfully Logged Into Your Account!");
    }
  };
  useEffect(() => {
    DashboardPageLoaded();
  }, []);

  return (
    <div
      className="dashboard"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100px",
      }}
    >
      <button onClick={() => Navigate(`/addproducts/${params.password}`)}>
        Add Products
      </button>
      <button onClick={() => Navigate(`/addposts/${params.password}`)}>
        Add Posts
      </button>
    </div>
  );
}

export default Dashboard;
