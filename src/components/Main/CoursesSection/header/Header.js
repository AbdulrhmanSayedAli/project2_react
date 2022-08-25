import React from "react";

export default function Header(props) {
  return (
    <>
      <h2>A broad selection of courses</h2>
      <p>{props.title}</p>

      <span className="types">
        <strong className="chosen">Python</strong>
        <strong>Excel</strong>
        <strong>Web Development</strong>
        <strong>Javascript</strong>
        <strong>Data Science</strong>
        <strong>AWS Certification</strong>
        <strong>Drawing</strong>
      </span>
    </>
  );
}
