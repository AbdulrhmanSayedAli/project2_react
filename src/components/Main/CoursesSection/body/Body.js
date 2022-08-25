import React from "react";
import CoursesCarousel from "./CoursesCarousel";
export default function Body(props) {
  return (
    <div className="content" id="courses">
      <h3>
        <strong>Expand your career opportunities with Python</strong>
      </h3>
      <p>{props.description}</p>
      <button className="button">
        <strong>Explore Python</strong>
      </button>

      <CoursesCarousel courses={props.courses} />
    </div>
  );
}
