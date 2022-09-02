import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, _] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  return (
    <form
      className="item-in-nav"
      action="#courses"
      onSubmit={(event) => {
        event.preventDefault();
        if (query) navigate(`/?search=${query}`);
        else navigate("/");
      }}
    >
      <input
        type="search"
        placeholder="Search for anything..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="nav-button search" type="submit">
        Search
      </button>
    </form>
  );
}
