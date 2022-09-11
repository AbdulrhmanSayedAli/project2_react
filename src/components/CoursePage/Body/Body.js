import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import CourseContent from "./CourseContent/CourseContent";
import Description from "./Description";
import Instructor from "./Instructor";
import Requirements from "./Requirements";
import Reviews from "./Reviews/Reviews";
import TopCompanies from "./TopCompanies";
import TopCompaniesFooter from "./TopCompaniesFooter";
import WhatYouLearn from "./WhatYouLearn";

export default function Body() {
  const course = useContext(SimpleCourseContext);
  return (
    <>
      <section className="body ms-5">
        <div id="overview">
          <WhatYouLearn />
          <TopCompanies />
        </div>

        <div id="curriculum">
          <CourseContent />
        </div>

        <Requirements />
        <Description />

        <div id="instructor">
          <h4 className="mt-4 ms-4">
            <strong>
              Instructor{course.instructors.length > 1 ? "s" : ""}
            </strong>
          </h4>
          {course.instructors.map((el, index) => {
            return <Instructor instructor={el} />;
          })}
        </div>

        <div id="reviews">
          <Reviews />
        </div>
      </section>
      <TopCompaniesFooter />
    </>
  );
}
