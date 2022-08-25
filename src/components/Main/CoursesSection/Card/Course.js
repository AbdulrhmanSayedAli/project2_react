import React from "react";
import RatingBar from "./RatingBar";

export default function Course(props) {
  return (
    <div className="item">
      <img src={props.course.image} alt="course" />
      <h4>
        <strong>{props.course.title}</strong>
      </h4>
      <p>{props.course.author}</p>
      <RatingBar
        rate={props.course.rate}
        ratersCount={props.course.ratersCount}
        courseId={props.course.id}
      ></RatingBar>
      <span className="price">
        <p>
          <strong>{props.course.newPrice}$</strong>
        </p>
        <p>
          <strong>{props.course.oldPrice}$</strong>
        </p>
      </span>
    </div>
  );
}
