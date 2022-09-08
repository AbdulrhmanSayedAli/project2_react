import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import HeaderRatingBar from "./HeaderRatingBar";
import HeaderTabs from "./HeaderTabs";

export default function CoursePageAppBar() {
  const course = useContext(SimpleCourseContext);
  return (
    <div className="app-bar bg-dark">
      <div className="p-2 content ms-lg-5">
        <h1 className=" my-2">
          <strong>{course.title}</strong>
        </h1>
        <HeaderRatingBar />
      </div>
      <HeaderTabs />
    </div>
  );
}
