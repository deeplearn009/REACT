import React, { useState } from "react";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    axios.post("https://northwind.vercel.app/api/categories", {
      name: name,
      email: email,
      website: website,
      message: message,
    });
  };

  return (
    <div className="container">
      <div className="card">
        <form action="" onSubmit={sendData}>
          <div className="title">
            <span>GET IN TOUCH</span>
          </div>

          <div className="first_inp">
            <div className="left">
              <span>Tell us your name*</span>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="right">
              <span>Enter your email*</span>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="second_inp">
            <span>Your Website</span>
            <input
              type="text"
              placeholder="http://"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="third_inp">
            <span>Message</span>
            <textarea
              name=""
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="btn">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
