import React, { useContext } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import Course from "../Card/Course";
import { useSearchParams } from "react-router-dom";
import { CoursesContext } from "../../../../App";
export default function CoursesCarousel() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, _] = useSearchParams();

  const coursesData = useContext(CoursesContext);
  let data = coursesData.courses[coursesData.chosenTab.replace(" ", "")];

  const courses = [];

  for (let i = 0; i < data.length; i++) {
    if (
      !searchParams.get("search") ||
      data[i].title
        .toLowerCase()
        .includes(searchParams.get("search").toLowerCase())
    )
      courses.push(
        <div key={i}>
          <Course
            key={`${coursesData.chosenTab}-${data[i].id}`}
            course={data[i]}
            style={{ position: "relative" }}
          ></Course>
        </div>
      );
  }

  return (
    <div className="courses container-fluid w-100">
      <div className="row">
        <div className="col-12 m-auto">
          <div className="container-fluid">
            <OwlCarousel
              key={`${coursesData.chosenTab}-${searchParams.get("search")}`}
              className="owl-carousel owl-theme"
              loop={false}
              nav={true}
              margin={15}
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                800: {
                  items: 3,
                },
                1000: {
                  items: 4,
                },
                1200: {
                  items: 5,
                },
              }}
            >
              {courses}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
