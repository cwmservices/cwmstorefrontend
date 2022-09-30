import React, { useEffect, useRef, useState } from "react";
import "./Blog.scss";
import { ClipLoader } from "react-spinners";
import PostPagination from "../../Components/PostPagination/PostPagination";
import ShowPosts from "../../Components/ShowPosts/ShowPosts";
import { useNavigate } from "react-router-dom";

function Blog() {
  const Navigate = useNavigate();
  const BlogPageLoaded = async () => {
    try {
      const res = await fetch("https://cwmstorebackend.herokuapp.com/blog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      await res.json();
    } catch (error) {
      Navigate("/login");
    }
  };
  useEffect(() => {
    BlogPageLoaded();
  }, []);

  const [Posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [loading, setLoading] = useState(false);

  const pagination = useRef(null);

  useEffect(() => {
    async function fetchposts() {
      setLoading(true);
      const posts = await fetch("https://cwmstorebackend.herokuapp.com/posts");
      const allposts = await posts.json();
      setPosts(allposts);
      setTimeout(() => {
        setLoading(false);
        // pagination.current.style.display='flex';
      }, 2000);
    }

    fetchposts();
  }, []);

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return loading ? (
    <div
      style={{
        textAlign: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <ClipLoader color="green" loading={loading} size={70} />
    </div>
  ) : (
    <>
      <div className="blog">
        {currentPosts.map((post) => {
          return (
            <div key={post._id}>
              <ShowPosts title={post.title} image={post.image} id={post._id} />
            </div>
          );
        })}
      </div>
      <div className="pagination" ref={pagination}>
        <PostPagination
          postsPerPage={postsPerPage}
          totalPosts={Posts.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}
export default Blog;
