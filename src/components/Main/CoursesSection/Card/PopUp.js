import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import CheckIcon from "@mui/icons-material/Check";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const whatYouLearnItem = (text) => {
  return (
    <div
      className="what-you-learn-item"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <CheckIcon />
      <span>{text}</span>
    </div>
  );
};

export default function PopUp(props) {
  const course = props.course;
  const [popupHovered, setPopupHovered] = useState(false);
  const opened = Boolean(props.anchorEl) || popupHovered;
  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
      }}
      open={opened}
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={props.handlePopoverClose}
      disableRestoreFocus
    >
      <div
        className="popover"
        onMouseEnter={() => {
          setPopupHovered(true);
        }}
        onMouseLeave={() => {
          setPopupHovered(false);
        }}
      >
        <h4>
          <strong>{course.title}</strong>
        </h4>

        <h6>
          Updated <strong>{course.lastUpdate}</strong>
        </h6>

        <div>
          <span className="mx-1">9 total hours</span>
          <span className="mx-1">All levels</span>
        </div>

        <h5 className="my-3">{course.subTitle}</h5>

        {course.whatYouLearn.map((el, index) => {
          return whatYouLearnItem(el);
        })}

        <div className="d-flex align-items-center m-2">
          <button className="flex-grow-1 mx-1">Add to cart</button>
          <div className="favourite mx-1">
            <FavoriteBorderIcon />
          </div>
        </div>
      </div>
    </Popover>
  );
}
