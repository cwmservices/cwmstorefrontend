import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AdminAddPosts.scss";

function AdminAddPosts() {
  const Navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const AdminAddPostsPageLoaded = () => {
    if (params.password != "adminBoard") {
      Navigate("/adminlogin");
    } else {
      console.log("You Have Been Successfully Logged In!");
    }
  };
  useEffect(() => {
    AdminAddPostsPageLoaded();
  }, []);

  const [title, setTitle] = useState("");
  const [image, setImageUrl] = useState("");
  const [desc, setDesc] = useState("");

  const sendingPostDataToServer = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://cwmstorebackend.herokuapp.com/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, image, desc }),
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (data) {
        alert("The Post Has Been Saved!");
        setTitle("");
        setDesc("");
        setImageUrl("");
      } else {
        alert("data not send");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="right"
      style={{ paddingTop: "100px", paddingBottom: "30px" }}
    >
      <form>
        <input
          type="text"
          className="field"
          placeholder="Post Title..."
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="field"
          placeholder="Post Image(Url Preference)..."
          value={image}
          name="image"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <textarea
          style={{ resize: "vertical" }}
          placeholder="Post Description..."
          className="field"
          name="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={sendingPostDataToServer}
          type="submit"
          className="btnbtn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminAddPosts;
