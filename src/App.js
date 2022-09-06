import "./styles/mainPage/courses.css";
import "./styles/loadingBar.css";
import "./styles/ratingBar.css";
import "./styles/mainPage/navigation_bar.css";
import "./styles/mainPage/header.css";
import "./styles/mainPage/categories.css";
import "./styles/mainPage/footer.css";
import "./styles/coursePage/header.css";
import "./styles/coursePage/side.css";

import Main from "./pages/Main";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import React, { createContext, useEffect, useState } from "react";

export const CoursesContext = createContext();

function App() {
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
    <div className="App">
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
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/course/:id" element={<CoursePage />}></Route>
        </Routes>
      </CoursesContext.Provider>
    </div>
  );
}

export default App;
