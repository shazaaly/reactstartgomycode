import React, { useState } from "react";
import { useConsol } from "./useConsol";

export const Counter = () => {
  const [count, setCount] = useState(0);
  useConsol(count);

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h3>Value : {count}</h3>
            <button onClick={incrementHandler}>Plus 1</button>
    </div>
  );
};
