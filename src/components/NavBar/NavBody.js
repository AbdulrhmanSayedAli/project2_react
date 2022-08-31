import React from "react";
import SearchBar from "./SearchBar";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function NavBody() {
  return (
    <section className="nav-bar text-center">
      <MenuIcon className="icon menu item-in-nav" />
      <div className="item-in-nav empty-space"></div>
      <Link to="/">
        <img
          className="item-in-nav udemy-logo"
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy"
        />
      </Link>
      <div className="item-in-nav empty-space"></div>
      <a className="item-in-nav" href="https://www.udemy.com/">
        Categories
      </a>

      <SearchBar />
      <a className="item-in-nav" href="https://www.udemy.com/">
        Udemy Business
      </a>
      <a className="item-in-nav" href="https://www.udemy.com/">
        Teach on Udemy
      </a>

      <ShoppingCartIcon className="icon cart item-in-nav" />
      <button className="nav-button login item-in-nav">log in</button>
      <button className="nav-button signup item-in-nav">sign up</button>
      <LanguageIcon className="icon language item-in-nav" />
      <SearchIcon className="icon search item-in-nav" />
    </section>
  );
}
