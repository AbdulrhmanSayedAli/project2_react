import React, { useContext } from "react";
import { CoursesContext } from "../../../../App";
import LoadingBar from "../../../LoadingBar/LoadingBar";
import CoursesCarousel from "./CoursesCarousel";

export default function Body(props) {
  const coursesData = useContext(CoursesContext);

  return (
    <div className="content" id="courses">
      <h3>
        <strong>Expand your career opportunities with Python</strong>
      </h3>
      <p>{props.description}</p>
      <button className="button">
        <strong>Explore Python</strong>
      </button>

      {coursesData.loaded ? <CoursesCarousel /> : <LoadingBar />}
    </div>
  );
}
