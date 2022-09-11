import React, { useState } from "react";
import RatingBar from "../../../RatingBar/RatingBar";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { getNameFirstLetters } from "../../../../Utils";

export default function Comment(props) {
  const comment = props.comment;
  const [likeState, setLikeState] = useState("none");
  return (
    <div className="comment mt-4">
      <div className="d-flex">
        <div className="image d-flex align-items-center justify-content-center">
          <strong className="s">{getNameFirstLetters(comment.name)}</strong>
        </div>
        <div className="ms-4">
          <strong>{comment.name}</strong>
          <div className="d-flex align-items-center">
            <RatingBar rate={comment.rate} courseId={`comm-${comment.id}`} />
            <div className="date ms-2">{comment.dateFrom}</div>
          </div>
          <p className="details">{comment.details}</p>
          <p className="helpful">Was this review Helpful?</p>
          <div className="d-flex align-items-center">
            <div
              className={`${
                likeState === "like" ? "chosen" : ""
              } button d-flex align-items-center justify-content-center  m-2`}
              onClick={() => {
                setLikeState(likeState === "like" ? "none" : "like");
              }}
            >
              <ThumbUpOffAltIcon />
            </div>
            <div
              className={`${
                likeState === "dislike" ? "chosen" : ""
              } button d-flex align-items-center justify-content-center  m-2`}
              onClick={() => {
                setLikeState(likeState === "dislike" ? "none" : "dislike");
              }}
            >
              <ThumbDownOffAltIcon />
            </div>
            <div className="report">Report</div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
}
