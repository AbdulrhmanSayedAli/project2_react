import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import RatingBar from "../../RatingBar/RatingBar";

export default function HeaderRatingBar() {
  const course = useContext(SimpleCourseContext);

  return (
    <span className="ms-lg-5 d-flex rating-bar" key={`rating-${course.id}`}>
      <strong className="rate mx-1">{course.feedBack.rate}</strong>
      <span className="mx-1">
        <RatingBar rate={course.feedBack.rate} courseId={course.id} />
      </span>
      <span className="raters mx-1">{`(${course.feedBack.ratersCount} ratings)`}</span>
      <span className="students mx-1">{`${course.students} students`}</span>
    </span>
  );
}
