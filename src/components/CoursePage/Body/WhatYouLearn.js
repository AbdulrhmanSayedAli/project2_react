import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import CheckIcon from "@mui/icons-material/Check";

const Item = (text) => {
  return (
    <div
      className="what-you-learn-item "
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <CheckIcon />
      <span>{text}</span>
    </div>
  );
};

export default function WhatYouLearn() {
  const course = useContext(SimpleCourseContext);
  return (
    <div className="what-you-learn body-card mt-4 ">
      <h3>
        <strong>What you'll learn</strong>
      </h3>
      {course.whatYouLearn.map((el, index) => {
        return Item(el);
      })}
    </div>
  );
}
