import React, { useEffect, useState } from "react";

export const TitleToggle = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.title = toggle ? "Welcome to React!" : "Welcome";
  }, [toggle]);
  return (
    <div>
      <button onClick={(e) => setToggle(!toggle)}>Toggle</button>
      {toggle && <h3>Welcome to my ReactJs</h3>}
    </div>
  );
};
