import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
export default function RatingBar(props) {
  const stars = [];
  for (let i = 0; i < props.rate; i++) {
    stars.push(<StarIcon className=" full-star" />);
  }
  if (props.rate % 1 !== 0) {
    stars.pop();
    stars.push(<StarHalfIcon className=" full-star" />);
  }
  for (let i = 0; i < 5 - props.rate - (props.rate % 1 !== 0 ? 1 : 0); i++) {
    stars.push(<StarIcon className=" empty-star" />);
  }
  return (
    <span className="rating-bar">
      <p className="rate">{props.rate}</p>
      <tbody>{stars}</tbody>
      <p className="raters">({props.ratersCount})</p>
    </span>
  );
}
