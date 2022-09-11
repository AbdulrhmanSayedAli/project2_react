import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoursePageHeader from "../components/CoursePage/Header/CoursePageHeader";
import { CoursesContext, NavBarVisibilityContext } from "../App";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import Body from "../components/CoursePage/Body/Body";

const getCourse = (id, tab, data) => {
  for (let i = 0; i < data.courses[tab].length; i++)
    if (data.courses[tab][i].id.toString() === id.toString())
      return data.courses[tab][i];
};

const changeNavVisibilty = (NavVisibility, newVisibility) => {
  if (NavVisibility.isVisible.toString() !== newVisibility.toString()) {
    NavVisibility.setVisibility(newVisibility);
  }
};

export const SimpleCourseContext = createContext();

export default function CoursePage() {
  const { tab, id } = useParams();
  const data = useContext(CoursesContext);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [footerVisible, setFooterVisible] = useState(false);
  const NavVisibility = useContext(NavBarVisibilityContext);

  if (!headerVisible && !footerVisible)
    changeNavVisibilty(NavVisibility, false);
  else changeNavVisibilty(NavVisibility, true);

  const observerHeader = new IntersectionObserver((entries, observer) => {
    const entry = entries[0];
    if (entry.isIntersecting !== headerVisible) {
      setHeaderVisible(entry.isIntersecting);
    }
  });

  const observerFooter = new IntersectionObserver((entries, observer) => {
    const entry = entries[0];
    if (entry.isIntersecting !== footerVisible) {
      setFooterVisible(entry.isIntersecting);
    }
  });

  useEffect(() => {
    if (data.loaded) {
      observerHeader.observe(document.querySelector(".header h1"));
      observerFooter.observe(document.querySelector("footer img"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <section className="course-page">
      {data.loaded ? (
        <SimpleCourseContext.Provider value={{ ...getCourse(id, tab, data) }}>
          <CoursePageHeader />
          <Body />
        </SimpleCourseContext.Provider>
      ) : (
        <LoadingBar />
      )}
    </section>
  );
}
