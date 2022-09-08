import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import HeaderRatingBar from "./HeaderRatingBar";
import PathToCourse from "./PathToCourse";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import SideCourseCard from "./SideCourseCard";
import HeaderTabs from "./HeaderTabs";
import CoursePageAppBar from "./CoursePageAppBar";
import { NavBarVisibilityContext } from "../../../App";

export default function CoursePageHeader() {
  const course = useContext(SimpleCourseContext);
  const NavVisibility = useContext(NavBarVisibilityContext);
  return (
    <>
      <section>
        {NavVisibility.isVisible ? <span></span> : <CoursePageAppBar />}
      </section>
      <header className="header bg-dark text-light p-2 p-md-3 p-lg-4 d-block ">
        <div className="content">
          <SideCourseCard />
          <PathToCourse />
          <h1 className="ms-lg-5 my-2">
            <strong>{course.title}</strong>
          </h1>
          <h2 className="ms-lg-5 my-2">{course.subTitle}</h2>
          <HeaderRatingBar />
          <p className="ms-lg-5 author">
            Created By :{" "}
            {course.instructors.map((el, index) => {
              return <strong className="name">{el.name} </strong>;
            })}
          </p>
          <div className="ms-lg-5 d-lg-flex">
            <div className="me-4">
              <InfoIcon className="icon" />
              <p className="d-inline mx-1">Last Updated {course.lastUpdate}.</p>
            </div>
            <div>
              <LanguageIcon className="icon" />
              <p className="d-inline mx-1">{course.language}.</p>
            </div>
          </div>
        </div>
      </header>
      {NavVisibility.isVisible ? <HeaderTabs /> : <span></span>}
    </>
  );
}
