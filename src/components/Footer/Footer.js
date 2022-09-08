import React from "react";
import Item from "./Item";

export default function Footer() {
  return (
    <footer className="mt-5">
      <ul>
        <Item text="Udemy Business" />
        <Item text="Teach on Udemy" />
        <Item text="Get the app" />
        <Item text="About us" />
        <Item text="Contact us" />
        <Item text="Careers" />
        <Item text="Blog" />
        <Item text="Help and Support" />
        <Item text="Affiliate" />
        <Item text="Investors" />
        <Item text="Terms" />
        <Item text="Privacy policy" />
        <Item text="Cookie settings" />
        <Item text="Sitemap" />
      </ul>

      <span>
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          alt="udemy"
        />
        <p>&copy; 2022 Udemy, Inc.</p>
      </span>
    </footer>
  );
}
