import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import HeaderRatingBar from "./HeaderRatingBar";
import HeaderTabs from "./HeaderTabs";

export default function CoursePageAppBar() {
  const course = useContext(SimpleCourseContext);
  return (
    <div className="app-bar bg-dark">
      <div className="p-2 d-flex align-items-center content bg-dark">
        <div className=" flex-grow-1 inner">
          <h1 className="ms-lg-5 my-2">
            <strong>{course.title}</strong>
          </h1>
          <HeaderRatingBar />
        </div>
        <h3 className="mx-3  d-lg-none">
          <strong>{course.newPrice}$</strong>
        </h3>
        <button className="mx-3 d-lg-none">
          <strong>Buy now</strong>
        </button>
      </div>

      <HeaderTabs />
    </div>
  );
}
