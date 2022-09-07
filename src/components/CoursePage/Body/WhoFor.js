import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";

export default function WhoFor() {
  const course = useContext(SimpleCourseContext);
  return (
    <div className="who-for body-card mt-3">
      <h4>
        <strong>Who this course is for:</strong>
      </h4>
      <ul>
        {course.whoFor.map((el, index) => {
          return <li>{el}</li>;
        })}
      </ul>
    </div>
  );
}
