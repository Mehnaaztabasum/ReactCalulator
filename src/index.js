import React from "react";
import ReactDOM from "react-dom";
import { add, sub, mul, div, mod } from "./calculations";

// using functions

ReactDOM.render(
  <div style={{ backgroundColor: "#FDEEDC" }}>
    <h2 style={{ color: "#F94892" }}>{add(1, 2)} </h2>
    <h2 style={{ color: "Green" }}>{sub(6, 2)} </h2>
    <h2 style={{ color: "#D36B00" }}>{mul(9, 1)} </h2>
    <h2 style={{ color: "#A62349" }}>{div(6, 3)} </h2>
    <h2 style={{ color: "#6FEDD6" }}>{mod(9, 1)} </h2>
  </div>,
  document.getElementById("root")
);


