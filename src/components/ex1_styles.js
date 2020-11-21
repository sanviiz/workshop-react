import React from "react";
import "./styles.css";

export default function ex1_styles() {
  const styles = {
    container: { backgroundColor: "#f0f" },
  };

  return (
    <div>
      <div style={styles.container}>
        <h1>Style Example</h1>
      </div>
      <div className="root">
        <h1>Class Example</h1>
      </div>
    </div>
  );
}
