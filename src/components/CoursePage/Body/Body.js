import React from "react";
import CourseContent from "./CourseContent/CourseContent";
import TopCompanies from "./TopCompanies";
import WhatYouLearn from "./WhatYouLearn";

export default function Body() {
  return (
    <section className="body ms-5">
      <WhatYouLearn />
      <TopCompanies />
      <CourseContent />
    </section>
  );
}
