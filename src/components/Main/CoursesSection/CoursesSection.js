import React, { createContext, useEffect, useState } from "react";
import Header from "./header/Header";
import Body from "./body/Body";

export const CoursesContext = createContext();

function CoursesSection(props) {
  const [state, setState] = useState({
    loaded: false,
  });

  useEffect(() => {
    fetch(`http://localhost:3000/all`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setState({ chosenTab: "Python", loaded: true, courses: json });
      });
  }, []);

  return (
    <section className="courses-section">
      <CoursesContext.Provider
        value={{
          ...state,
          changeCoursesTab: (newTab) => {
            setState({
              ...state,
              chosenTab: newTab,
            });
          },
        }}
      >
        <Header title={props.title} />
        <Body description={props.description}></Body>
      </CoursesContext.Provider>
    </section>
  );
}
export default CoursesSection;
