import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleIcon from "@mui/icons-material/People";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { subString } from "../../../Utils";

const generateItem = (icon, text) => {
  return (
    <div className="d-flex align-items-center my-2">
      {icon}
      <span className="ms-3">{text}</span>
    </div>
  );
};

export default function Instructor(props) {
  const instructor = props.instructor;
  const [showedMore, setShowedMore] = useState(false);
  return (
    <div className="instructor mt-4 ms-4">
      <h5>{instructor.name}</h5>
      <p>{instructor.workOrStudy}</p>
      <div className="d-flex align-items-center">
        <img src={instructor.image} alt={instructor.name}></img>
        <div className="ms-4">
          {generateItem(<StarIcon />, `${instructor.rating} Instructor Rating`)}
          {generateItem(
            <WorkspacePremiumIcon />,
            `${instructor.reviews} Reviews`
          )}{" "}
          {generateItem(<PeopleIcon />, `${instructor.students} Students`)}
          {generateItem(<PlayCircleIcon />, `${instructor.courses} Courses`)}
        </div>
      </div>
      <div
        className={`ms-3 mt-2 ${showedMore ? "" : "masked"}`}
        dangerouslySetInnerHTML={{
          __html: showedMore
            ? instructor.about.replaceAll("\n", "<br/>")
            : subString(instructor.about, 400) + "...",
        }}
      ></div>
      <button
        className="mt-3"
        onClick={() => {
          setShowedMore(!showedMore);
        }}
      >
        <strong>
          {showedMore ? (
            <span>Show less &uarr;</span>
          ) : (
            <span>Show more &darr;</span>
          )}
        </strong>
      </button>
    </div>
  );
}
