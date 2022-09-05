import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

export default function RatingBar(props) {
  const stars = [];
  let StarNumber = 1;
  for (let i = 0; i < props.rate; i++) {
    stars.push(
      <StarIcon
        key={`${props.courseId}-${StarNumber}`}
        className=" full-star"
      />
    );
    StarNumber++;
  }
  //if rate is double then the last star should be half empty
  if (props.rate % 1 !== 0) {
    stars.pop();
    //StarNumber - 1 means use the same key as previous removed star
    stars.push(
      <StarHalfIcon
        key={`${props.courseId}-${StarNumber - 1}`}
        className=" full-star"
      />
    );
  }
  for (let i = 0; i < 5 - props.rate - (props.rate % 1 !== 0 ? 1 : 0); i++) {
    stars.push(
      <StarIcon
        key={`${props.courseId}-${StarNumber}`}
        className=" empty-star"
      />
    );
    StarNumber++;
  }
  return <span className="rating-bar d-inline">{stars}</span>;
}
