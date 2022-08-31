import React from "react";
import timer from "../../../assets/images/header_timer.png";
export default function MainHeader() {
  return (
    <header>
      <div className="header-content">
        <div>
          <span>
            <h2>
              <strong>New to Udemy?Lucky You.</strong>
            </h2>
            <p>
              Courses start at 89.99$ Get your new-student offer before it
              expires.
            </p>
          </span>
        </div>

        <img src={timer} alt="header" />
      </div>
    </header>
  );
}
