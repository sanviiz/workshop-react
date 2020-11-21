import React from "react";
import PropTypes from "prop-types";

export default function ex3_props(props) {
  return (
    <div>
      {props.showLabel && <h1 style={{ display: "inline" }}>Count: </h1>}
      <h1 style={{ color: props.color, display: "inline" }}>{props.count}</h1>
    </div>
  );
}

ex3_props.propTypes = {
  count: PropTypes.number,
};

ex3_props.defaultProps = {
  showLabel: true,
};
