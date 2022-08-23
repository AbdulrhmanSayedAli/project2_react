import React from "react";
import OwlCarousel from "react-owl-carousel";
import Course from "./Course";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function CoursesSection(props) {
  let courses = [];

  for (let i = 0; i < props.courses.length; i++) {
    courses.push(<Course course={props.courses[i]}></Course>);
  }

  return (
    <section className="courses-section">
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

      <div className="content" id="courses">
        <h3>
          <strong>Expand your career opportunities with Python</strong>
        </h3>
        <p>{props.description}</p>
        <button className="button">
          <strong>Explore Python</strong>
        </button>

        <div className="courses container-fluid w-100">
          <div className="row">
            <div className="col-12 m-auto">
              <div class="container-fluid">
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
                  {courses.map((course) => {
                    return course;
                  })}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
