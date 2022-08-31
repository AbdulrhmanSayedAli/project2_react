import React from "react";

export default function SearchBar() {
  return (
    <form className="item-in-nav" action="#courses">
      <input type="search" placeholder="Search for anything..." />
      <button className="nav-button search" type="submit">
        Search
      </button>
    </form>
  );
}
