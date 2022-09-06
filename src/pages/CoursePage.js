import { createContext, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CoursePageHeader from "../components/CoursePage/Header/CoursePageHeader";
import { CoursesContext, NavBarVisibilityContext } from "../App";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import Body from "../components/CoursePage/Body/Body";

const getCourse = (id, data) => {
  for (let i = 0; i < data.courses[data.chosenTab].length; i++)
    if (data.courses[data.chosenTab][i].id.toString() === id.toString())
      return data.courses[data.chosenTab][i];
};

const changeNavVisibilty = (NavVisibility, newVisibility) => {
  if (NavVisibility.isVisible.toString() !== newVisibility.toString())
    NavVisibility.setVisibility(newVisibility);
  console.log("switched");
};

export const SimpleCourseContext = createContext();

export default function CoursePage() {
  const { id } = useParams();
  const data = useContext(CoursesContext);
  const NavVisibility = useContext(NavBarVisibilityContext);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        changeNavVisibilty(NavVisibility, false);
      } else changeNavVisibilty(NavVisibility, true);
    });
    if (data.loaded) observer.observe(document.querySelector(".header h1"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //unmount
  useEffect(() => {
    return () => {
      changeNavVisibilty(NavVisibility, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="course-page">
      {data.loaded ? (
        <SimpleCourseContext.Provider value={{ ...getCourse(id, data) }}>
          <CoursePageHeader />
          <Body />
        </SimpleCourseContext.Provider>
      ) : (
        <LoadingBar />
      )}
    </section>
  );
}
