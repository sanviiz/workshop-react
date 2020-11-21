import React, { useState } from "react";
import CounterClassComponent from "./CounterClassComponent";
import CounterFuctionalComponent from "./CounterFuctionalComponent";
import EX1Style from "./components/ex1_styles";
import EX2Image from "./components/ex2_image";

export default () => {
  let var1 = 0;
  const show = true;
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>var1: {show && var1}</h1>
      <h1>count: {count}</h1>
      <button
        onClick={() => {
          var1 += 1;
          setCount(count + 1);
          console.log(var1);
        }}
      >
        Add
      </button>
      <CounterClassComponent />
      <CounterFuctionalComponent />
      <EX1Style />
      <EX2Image />
    </div>
  );
};
