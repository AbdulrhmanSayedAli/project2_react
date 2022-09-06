import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function Lecture(props) {
  return (
    <div className="d-flex align-items-center lecture">
      <PlayCircleIcon className="m-2" />

      <a className="flex-grow-1 m-2" href=" ">
        {props.lecture.title}
      </a>

      <a className="m-2" href=" ">
        Preview
      </a>
      <div className="m-2">{props.lecture.time}</div>
    </div>
  );
}
