import React from "react";

export default function ex2_image(props) {
  return (
    <div>
      <img src="/logo512.png" height="200" />
      <img src="/images/react-JS.jpg" height="200" />
      {props.image && <img src={props.image} height="200" />}
    </div>
  );
}
