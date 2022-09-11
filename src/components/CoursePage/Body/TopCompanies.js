import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";

export default function TopCompanies() {
  const companies = useContext(SimpleCourseContext).companiesSupport;
  return (
    <div
      className={`${
        companies.length === 0 ? "d-none " : ""
      } mt-4 top-companies body-card`}
      id="overview"
    >
      <h4>
        <strong>Top companies offer this course to their employees</strong>
      </h4>
      <p>
        This course was selected for our collection of top-rated courses trusted
        by businesses worldwide. <a href=" ">Learn more</a>
      </p>
      <div className="companies d-flex justify-content-around align-items-center flex-wrap">
        {companies.map((el, index) => {
          return <img src={el.image} alt={el.name}></img>;
        })}
      </div>
    </div>
  );
}
