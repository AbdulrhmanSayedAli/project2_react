import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import HeaderRatingBar from "./HeaderRatingBar";
import PathToCourse from "./PathToCourse";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import SideCourseCard from "./SideCourseCard";
import HeaderTabs from "./HeaderTabs";

export default function CoursePageHeader() {
  const course = useContext(SimpleCourseContext);
  return (
    <>
      <header className="header bg-dark text-light p-2 p-md-3 p-lg-4 d-block ">
        <SideCourseCard />
        <PathToCourse />

        <h1 className="ms-5 my-2">
          <strong>{course.title}</strong>
        </h1>
        <h2 className="ms-5 my-2">{course.subTitle}</h2>
        <HeaderRatingBar />
        <p className="ms-5 author">
          Created By :{" "}
          <strong className="name">{course.instructor.name}</strong>
        </p>
        <div className="ms-5 d-lg-flex">
          <div className="me-4">
            <InfoIcon className="icon" />
            <p className="d-inline mx-1">Last Updated {course.lastUpdate}.</p>
          </div>
          <div>
            <LanguageIcon className="icon" />
            <p className="d-inline mx-1">{course.language}.</p>
          </div>
        </div>
      </header>
      <HeaderTabs />
    </>
  );
}
