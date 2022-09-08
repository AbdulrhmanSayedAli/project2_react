import React, { useContext, useState } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
import { subString } from "../../../Utils";
import WhoFor from "./WhoFor";

export default function Description() {
  const course = useContext(SimpleCourseContext);
  const [showedMore, setShowedMore] = useState(false);

  return (
    <div className="description body-card mt-4">
      <h4>
        <strong>Description</strong>
      </h4>
      <div
        className={`${showedMore ? "" : "masked"} mt-3 text`}
        dangerouslySetInnerHTML={{
          __html: showedMore
            ? course.description.replaceAll("\n", "<br/>")
            : subString(course.description, 700) + "...",
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
