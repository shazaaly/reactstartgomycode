import React from "react";
import { Course, Person } from "./Course";

export const CoursesList = () => {
  const course = { name: "Anatomy", chapters: 29, place: "Austria" };

  return (
    <div>
      <Course {...course} />
    </div>
  );
};
