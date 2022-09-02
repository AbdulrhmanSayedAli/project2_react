import React, { useContext } from "react";
import { CoursesContext } from "../CoursesSection";

export default function Tab(props) {
  const coursesData = useContext(CoursesContext);

  return (
    <strong
      key={props.value}
      onClick={() => {
        coursesData.changeCoursesTab(props.value);
      }}
      className={coursesData.chosenTab === props.value ? "chosen" : ""}
    >
      {props.value}
    </strong>
  );
}
