//The correct way to update the state object in React when using useState

import React, { useState } from "react";

export const UseStHook = () => {
  const [student, setStudent] = useState({
    name: "Ahmed Hussein",
    Workspace: "GoMyCode",
    Department: "Coding",
    Position: "Architect",
  });

  const updateName = () => {
      /* 1- create copy  2- update property* 3- set with the copy/  */
    const stdObj = { ...student };
    stdObj.name = "Ahmed Mansour";
    setStudent(stdObj);
  };

  return (
    <div>
      <h1>Student name : {student.name}</h1>
      <button onClick={updateName}>Change name</button>
    </div>
  );
};
