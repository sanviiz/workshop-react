import React from "react";

export default function CounterFuctionalComponent() {
  // React Hook
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ backgroundColor: "green", color: "white" }}>
      <h1>Counter Functional Component</h1>
      <h3>Counter: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}
