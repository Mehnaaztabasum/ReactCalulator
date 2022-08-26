import React from "react";

function Heading() {
  const url = "https://picsum.photos/200/200";
  const inline = {
    color: "red",
    fontSize: "1.2rem",
    border: "1px solid black"
  };
  const date = new Date();

  const currtime = date.getHours();
  let greet = " ";
  if (currtime < 12) {
    greet = "Good Morning";
    inline.color = "red";
  } else if (currtime < 18) {
    greet = "Good afternoon";
    inline.color = "blue";
  } else {
    greet = "Good night";
    inline.color = "yellow";
  }

  return (
    <h1 className="heading" style={inline}>
      {greet}
    </h1>
  );
}

export default Heading;
