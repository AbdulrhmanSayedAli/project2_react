import React, { useContext, useState } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import WhoFor from "./WhoFor";

const getIndexForSubString = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (i > 700 && text[i] === " ") return i + 1;
  }

  return text.length;
};

const subString = (text) => {
  text = text.replaceAll("\n", "<br/>");
  return text.substring(0, getIndexForSubString(text));
};

export default function Description() {
  const course = useContext(SimpleCourseContext);
  const [showedMore, setShowedMore] = useState(false);

  console.log(getIndexForSubString(course.description));
  return (
    <div className="description body-card mt-4">
      <h4>
        <strong>Description</strong>
      </h4>
      <div
        className="mt-3 text"
        dangerouslySetInnerHTML={{
          __html: showedMore
            ? course.description.replaceAll("\n", "<br/>")
            : subString(course.description),
        }}
      ></div>

      {showedMore ? <WhoFor /> : <span></span>}

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
