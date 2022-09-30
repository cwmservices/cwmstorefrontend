import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./SinglePost.scss";

function SinglePost() {
  const [postData, setPostData] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getPost() {
      const onePost = await fetch(
        `https://cwmstorebackend.herokuapp.com/posts/${params.id}`
      );
      const singlePostData = await onePost.json();
      setPostData(singlePostData);
    }

    getPost();
  }, []);

  return (
    <>
      <div className="single-post">
        {postData.map((post) => {
          return (
            <>
              <h2>{post.title}</h2>
              <img src={post.image} alt="post-thumbnail" />
              <p style={{ opacity: "0.9" }}>{post.desc}</p>
            </>
          );
        })}
      </div>
      <div className="socials">
        <div className="social">
          <a target="blank" href="https://www.facebook.com">
            <img src="/facebook.png" alt="fb" />
          </a>
        </div>
        <div className="social">
          <a target="blank" href="https://www.youtube.com">
            <img src="/youtube.png" alt="yt" />
          </a>
        </div>
        <div className="social">
          <a target="blank" href="https://www.twitter.com">
            <img src="/twitter.png" alt="tw" />
          </a>
        </div>
        <div className="social">
          <a target="blank" href="https://www.instagram.com">
            <img src="/instagram.png" alt="insta" />
          </a>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
