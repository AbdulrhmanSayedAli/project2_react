import React from "react";
import { useRef } from "react";

const close = (notification) => {
  console.log("ss");
  notification.current.className = "hidden-notification";
};

export default function Notification(props) {
  const notification = useRef();
  return (
    <section className="notification" ref={notification}>
      <span>
        <p>
          <strong>Get courses from 99.99$ for a limited time</strong>| A special
          offer for new students
        </p>
        <p>
          <strong> Ends in 5h 30m 40s.</strong>
        </p>
      </span>

      <button
        id="close-notification"
        onClick={() => {
          close(notification);
        }}
      >
        &#10006;
      </button>
    </section>
  );
}
