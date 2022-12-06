import React, { useEffect } from "react";
import { useRef } from "react";

export const UseRefEx = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h3> Focus on input : </h3>
      <input ref={inputRef} type="text" />
    </div>
  );
};
