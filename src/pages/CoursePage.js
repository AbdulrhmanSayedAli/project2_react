import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import CoursePageHeader from "../components/CoursePage/Header/CoursePageHeader";
import { CoursesContext } from "../App";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import Body from "../components/CoursePage/Body/Body";

const getCourse = (id, data) => {
  for (let i = 0; i < data.courses[data.chosenTab].length; i++)
    if (data.courses[data.chosenTab][i].id.toString() === id.toString())
      return data.courses[data.chosenTab][i];
};

export const SimpleCourseContext = createContext();

export default function CoursePage() {
  const { id } = useParams();
  const data = useContext(CoursesContext);

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
