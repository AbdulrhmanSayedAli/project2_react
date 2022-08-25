import React from "react";
import CoursesSection from "../components/Main/CoursesSection/CoursesSection";
import { title, description, courses } from "../RawData";
export default function Main() {
  return (
    <CoursesSection
      title={title}
      description={description}
      courses={courses}
    ></CoursesSection>
  );
}
