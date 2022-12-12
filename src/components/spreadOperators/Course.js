import React from "react";

export const Course = ({ ...data }) => {
    return (
      <div>
        <h2>Course Name : {data.name}</h2>
      </div>
    );
  };
  