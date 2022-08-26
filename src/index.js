import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import greetings, { day, month } from "./Math.js";

// using functions

ReactDOM.render(
  <div style={{ backgroundColor: "black" }}>
    <h2 style={{ color: "red" }}>{greetings} </h2>
    <h2 style={{ color: "Green" }}>{day()} </h2>
    <h2 style={{ color: "Yellow" }}>{month()} </h2>
    <App />
  </div>,
  document.getElementById("root")
);

//render will take only one html element
//  {/* <h1 style={{ color: "red" }}>Inline css</h1>   to get inline css in react*/}

//     {/* <img className="img" src={url + "?grayscale"} /> */}
