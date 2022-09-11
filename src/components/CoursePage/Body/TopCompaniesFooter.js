import React, { useContext } from "react";
import { SimpleCourseContext } from "../../../pages/CoursePage";
export default function TopCompaniesFooter() {
  const companies = useContext(SimpleCourseContext).companiesSupport;
  return (
    <div className="companies-footer d-flex justify-content-around align-items-center flex-wrap">
      <h6>
        <strong>
          Top companies choose <span>Udemy Business</span> to build in-demand
          career skills.
        </strong>
      </h6>
      <div className=" d-flex justify-content-around align-items-center flex-grow-1 flex-wrap">
        {companies.map((el, index) => {
          return <img src={el.lightImage} alt={el.name}></img>;
        })}
      </div>
    </div>
  );
}
