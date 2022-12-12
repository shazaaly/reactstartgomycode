import React from "react";

export const ChildrenEx = ({ children }) => {
  return (
    <div>
      <button  style={{ backgroundColor: "red" }}>{children}</button>
    </div>
  );
};
