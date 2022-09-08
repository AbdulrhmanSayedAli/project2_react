import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";

export default function PathToCourse() {
  const pathView = [];
  const path = useContext(SimpleCourseContext).pathToCourse;
  for (let i = 0; i < path.length; i++) {
    pathView.push(
      <span className="item mx-2">
        <strong>{path[i]}</strong>
      </span>
    );
    if (i !== path.length - 1)
      pathView.push(<span className="arrow">&gt;</span>);
  }
  return <div className="path ms-lg-5">{pathView}</div>;
}
