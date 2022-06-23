import React from "react";
import "./categoriesTage.css";
import { data } from "../../assets/data/data";

export default function CategoriesTage() {
  console.log(data);
  return (
    <ul className="categories">
      <li>
        <a href="#">Life</a>
      </li>
      <li>
        <a href="#">Style</a>
      </li>
      <li>
        <a href="#">Tech</a>
      </li>
      <li>
        <a href="#">Sport</a>
      </li>
      <li>
        <a href="#">Photo</a>
      </li>
      <li>
        <a href="#">Develop</a>
      </li>
      <li>
        <a href="#">Music</a>
      </li>
    </ul>
  );
}
