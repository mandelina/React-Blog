import React from "react";
import profile from "../../assets/profile.jpg";
import CategoriesTage from "../CategoriesTage/CategoriesTage";
import Sns from "../sns/Sns";
import "./aside.css";

export default function Aside() {
  return (
    <aside className="about">
      <h2>About Me</h2>
      <img src={profile} alt="찰리" className="user-profile" />
      <p className="user-name">Chilli</p>
      <p className="user-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <h3>Categories</h3>
      <CategoriesTage />
      <Sns />
    </aside>
  );
}
