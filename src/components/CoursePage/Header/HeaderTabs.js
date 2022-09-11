import React from "react";

export default function HeaderTabs() {
  return (
    <div className="header-tabs">
      <div className="tabs">
        <a href="#overview">
          <span>
            <strong>Overview</strong>
          </span>
        </a>
        <a href="#curriculum">
          <span>
            <strong>Curriculum</strong>
          </span>
        </a>
        <a href="#instructor">
          <span>
            <strong>Instructor</strong>
          </span>
        </a>
        <a href="#reviews">
          <span>
            <strong>Reviews</strong>
          </span>
        </a>
      </div>
    </div>
  );
}
