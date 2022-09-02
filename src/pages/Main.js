import React from "react";
import Categories from "../components/Main/CategoriesSection/Categories";
import CoursesSection from "../components/Main/CoursesSection/CoursesSection";
import MainHeader from "../components/Main/Header/MainHeader";
import Footer from "../components/Main/Footer/Footer";
import { title, description } from "../RawData";
export default function Main() {
  return (
    <>
      <MainHeader />
      <CoursesSection title={title} description={description}></CoursesSection>
      <Categories />
      <Footer />
    </>
  );
}
