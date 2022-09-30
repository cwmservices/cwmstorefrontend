import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const Navigate = useNavigate();

  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const contactPageLoaded = async () => {
    try {
      const res = await fetch("https://cwmstorebackend.herokuapp.com/contact", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setemail(data.email);
      setName(data.name);
    } catch (error) {
      Navigate("/login");
    }
  };
  useEffect(() => {
    contactPageLoaded();
  }, []);

  const contactMessages = (e) => {
    setMessage(e.target.value);
  };

  const sendingContactDataToServer = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://cwmstorebackend.herokuapp.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      if (data) {
        alert("message send");
        setName("");
        setMessage("");
      } else {
        alert("data not send");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <h2>Contact Us</h2>
            <form>
              <input
                type="text"
                className="field"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={contactMessages}
              />
              <input
                type="text"
                className="field"
                placeholder="Email"
                value={email}
                name="email"
                onChange={contactMessages}
              />
              <textarea
                placeholder="Message"
                className="field"
                name="message"
                value={message}
                onChange={contactMessages}
              />
              <button
                onClick={sendingContactDataToServer}
                type="submit"
                className="btnbtn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
