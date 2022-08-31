import React from "react";
import { categories } from "./RawData";
import Card from "./Card";

export default function Categories() {
  const categoriesView = [];
  for (let i = 0; i < categories.length; i++) {
    categoriesView.push(<Card {...categories[i]} />);
  }

  return (
    <section class="categories">
      <h2 class="ms-5">Top categories</h2>
      <div class="container my-4">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          {categoriesView}
        </div>
      </div>
    </section>
  );
}
