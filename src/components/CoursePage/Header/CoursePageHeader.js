import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import HeaderRatingBar from "./HeaderRatingBar";
import PathToCourse from "./PathToCourse";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import SideCourseCard from "./SideCourseCard";
import HeaderTabs from "./HeaderTabs";
import CoursePageAppBar from "./CoursePageAppBar";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
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
          <img
            src={course.image}
            className="d-block d-lg-none"
            alt="course"
          ></img>
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
            <div className="me-4">
              <LanguageIcon className="icon" />
              <p className="d-inline mx-1">{course.language}.</p>
            </div>
            <div className={course.captions === "" ? "d-none me-4" : "me-4"}>
              <ClosedCaptionIcon className="icon" />
              <p className="d-inline mx-1">{course.captions}.</p>
            </div>
          </div>
        </div>

        <div className="d-block d-lg-none">
          <div className="d-flex">
            <h2 className="ms-5 mt-5">
              <strong>{course.newPrice}$</strong>
            </h2>
            <h2
              className={`${
                course.newPrice === course.oldPrice ? "d-none" : ""
              } ms-5 mt-5`}
            >
              <strong>{course.oldPrice}$</strong>
            </h2>
          </div>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </header>
      {NavVisibility.isVisible ? <HeaderTabs /> : <span></span>}
    </>
  );
}
