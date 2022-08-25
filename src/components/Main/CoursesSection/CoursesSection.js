import React from "react";

import Header from "./header/Header";
import Body from "./body/Body";

export default function CoursesSection(props) {
  return (
    <section className="courses-section">
      <Header title={props.title} />
      <Body description={props.description} courses={props.courses}></Body>
    </section>
  );
}
