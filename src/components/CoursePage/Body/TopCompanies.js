import React from "react";

export default function TopCompanies() {
  return (
    <div className="mt-4 top-companies body-card" id="overview">
      <h4>
        <strong>Top companies offer this course to their employees</strong>
      </h4>
      <p>
        This course was selected for our collection of top-rated courses trusted
        by businesses worldwide. <a href=" ">Learn more</a>
      </p>
      <div className="companies d-flex justify-content-around align-items-center flex-wrap">
        <img
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
          alt="companie"
        ></img>
        <img
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
          alt="companie"
        ></img>
        <img
          src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
          alt="companie"
        ></img>
        <img
          src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
          alt="companie"
        ></img>
        <img
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
          alt="companie"
        ></img>
      </div>
    </div>
  );
}
