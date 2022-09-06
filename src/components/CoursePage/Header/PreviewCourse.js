import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
export default function PreviewCourse() {
  const data = useContext(SimpleCourseContext);
  return (
    <div className="preview">
      <img src={data.image} alt="course" />
      <div className="layer" />
      <div className="play">
        <PlayArrowIcon className="icon" />
      </div>
      <p>Preview this Course</p>
    </div>
  );
}
