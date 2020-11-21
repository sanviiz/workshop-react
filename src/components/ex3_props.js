import React from "react";

export default function ex3_props(props) {
  return (
    <div>
      {props.showLabel && <h1 style={{ display: "inline" }}>Count: </h1>}
      <h1 style={{ color: props.color, display: "inline" }}>{props.count}</h1>
    </div>
  );
}
