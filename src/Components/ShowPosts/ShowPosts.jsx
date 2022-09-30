import React from "react";
import { NavLink } from "react-router-dom";
import "./ShowPosts.scss";

function ShowPosts(props) {
  return (
    <div className="post">
      <NavLink to={`/blog/spost/${props.id}`}>
        <img src={props.image} alt="postsThumbnail" />
      </NavLink>
      <h4>8/12/2022</h4>
      <h3>{props.title}</h3>
    </div>
  );
}

export default ShowPosts;
