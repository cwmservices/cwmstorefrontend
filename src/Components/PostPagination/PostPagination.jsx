import React from "react";
import { NavLink } from "react-router-dom";
import "./PostPagination.scss";

const PostPagination = (props: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination-actual">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <NavLink
              onClick={() => props.paginate(number)}
              to="#"
              className="page-link"
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PostPagination;
