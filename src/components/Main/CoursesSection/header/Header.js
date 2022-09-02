import React from "react";
import Tab from "./Tab";
export default function Header(props) {
  return (
    <>
      <h2>A broad selection of courses</h2>
      <p>{props.title}</p>

      <span className="types">
        <Tab value="Python" />
        <Tab value="Excel" />
        <Tab value="Web Development" />
        <Tab value="Javascript" />
        <Tab value="Data Science" />
        <Tab value="AWS Certification" />
        <Tab value="Drawing" />
      </span>
    </>
  );
}
