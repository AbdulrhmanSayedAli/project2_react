import React from "react";
import { NavLink } from "react-router-dom";
import RatingBar from "../../../RatingBar/RatingBar";

export default function Course(props) {
  const course = props.course;
  return (
    <NavLink to={`/course/${course.id}`}>
      <div className="item">
        {/* <span class="tooltiptext">Tooltip text</span> */}

        <img src={course.image} alt="course" />
        <h4>
          <strong>{course.title}</strong>
        </h4>
        <p>{course.instructor.name}</p>
        <p className="rate d-inline">{course.feedBack.rate}</p>
        <RatingBar rate={course.feedBack.rate} courseId={course.id}></RatingBar>
        <p className="raters d-inline">({course.feedBack.ratersCount})</p>
        <span className="price">
          <p>
            <strong>{course.newPrice}$</strong>
          </p>
          <p>
            <strong>{course.oldPrice}$</strong>
          </p>
        </span>
      </div>
    </NavLink>
  );
}
