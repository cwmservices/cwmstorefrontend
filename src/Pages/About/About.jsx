import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./About.scss";

function About() {
  const Navigate = useNavigate();

  const AboutPageLoaded = async () => {
    try {
      const res = await fetch("https://cwmstorebackend.herokuapp.com/about", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
    } catch (error) {
      Navigate("/login");
    }
  };
  useEffect(() => {
    AboutPageLoaded();
  }, []);

  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="left-about">
            <h1>
              <span>A</span>bout Us
            </h1>
            <p>
              CWMSTORE is the offical website for online shopping. It has
              features that includes add to cart and whishlist, login, signup,
              backend support, payment gateway integration i.e stripe and
              authentication.
            </p>
          </div>
          <div className="right-about">
            <img src="mypic.jpg" alt="Masood Khan" />
          </div>
        </div>
      </div>
      <div className="socials">
        <div className="social">
          <a target="blank" href="https://www.facebook.com">
            <img src="facebook.png" alt="fb" />
          </a>
        </div>
        <div className="social">
          <a target="blank" href="https://www.youtube.com">
            <img src="youtube.png" alt="fb" />
          </a>
        </div>
        <div className="social">
          <a target="blank" href="https://www.twitter.com">
            <img src="twitter.png" alt="fb" />
          </a>
        </div>
        <div className="social">
          <a target="blank" href="https://www.instagram.com">
            <img src="instagram.png" alt="fb" />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
