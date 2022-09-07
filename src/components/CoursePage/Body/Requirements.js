import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";

export default function Requirements() {
  const course = useContext(SimpleCourseContext);
  return (
    <div className="requirements mt-5 body-card">
      <h4>
        <strong>Requirements</strong>
      </h4>
      <ul>
        {course.requirements.map((el, index) => {
          return <li>{el}</li>;
        })}
      </ul>
    </div>
  );
}
