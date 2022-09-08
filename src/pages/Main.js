import React, { useContext } from "react";
import Categories from "../components/Main/CategoriesSection/Categories";
import CoursesSection from "../components/Main/CoursesSection/CoursesSection";
import MainHeader from "../components/Main/Header/MainHeader";
import { title, description } from "../RawData";
import { NavBarVisibilityContext } from "../App";
export default function Main() {
  const NavVisibility = useContext(NavBarVisibilityContext);
  if (!NavVisibility.isVisible) {
    NavVisibility.setVisibility(true);
  }
  return (
    <>
      <MainHeader />
      <CoursesSection title={title} description={description}></CoursesSection>
      <Categories />
    </>
  );
}
