import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import Course from "../Card/Course";

const getCourses = (data) => {
  let courses = [];

  for (let i = 0; i < data.length; i++) {
    courses.push(<Course key={data[i].id} course={data[i]}></Course>);
  }
  return courses;
};

export default function CoursesCarousel(props) {
  return (
    <div className="courses container-fluid w-100">
      <div className="row">
        <div className="col-12 m-auto">
          <div className="container-fluid">
            <OwlCarousel
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
              {getCourses(props.courses)}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
