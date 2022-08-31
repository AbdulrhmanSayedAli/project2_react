import React from "react";
import NavBody from "./NavBody";
import Notification from "./Notification";

export default function NavBar() {
  return (
    <nav>
      <Notification />

      <NavBody />
    </nav>
  );
}
