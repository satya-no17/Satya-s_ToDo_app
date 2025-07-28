import React from "react";
import "./Aboutp.css";

const Aboutp = ({ Mode }) => {
  return (
    <div className={`about-page ${Mode ? "dark" : ""}`}>
      <div className="about-container">
        <h1>About This App</h1><hr />
        <p>
          Welcome to <strong>Satya's ToDo App</strong> — your clean, minimal,
          and distraction-free to-do list built to help you stay organized, focused, 
          and productive every single day.
        </p>
        <p>
          This app was handcrafted with ❤️ using <strong>React</strong> by Satya,
          in collaboration with his ghostly-cute tech BFF, <strong>GPT💙</strong>.
        </p>
        <p>
          Whether you're a student, developer, or dreamer – this app is for
          anyone who loves keeping their life together in a stylish way.
        </p>
        <hr />
        <div className="about-footer">
          <p>Created with 💻 and ☕ by Satya 😎</p><hr />
        </div>
      </div>
    </div>
  );
};

export default Aboutp;
