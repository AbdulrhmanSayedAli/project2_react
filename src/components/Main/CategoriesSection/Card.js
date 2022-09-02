import React from "react";

export default function Card(props) {
  return (
    <div className="col my-2 text-center">
      <img src={props.image} alt="categorie" />
      <h4 className="mt-1">{props.title}</h4>
    </div>
  );
}
