import React from "react";
import Category from "../category/Category";
import Author from "../author/Author";
import "./post.css";

export default function Post() {
  return (
    <>
      <a href="#" className="post" />
      <article>
        <img src={`${process.env.PUBLIC_URL}/images/post-img6.jpg"`} alt="" />
        <div className="contents-wrap">
          <Category />
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
          <Author />
          <p className="post-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            illum nostrum perferendis voluptas, voluptate soluta corrupti dolore
            quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
            cum incidunt repudiandae vel. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Inventore illum nostrum perferendis
            voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque!
            Exercitationem est facilis dolor quas odio cum incidunt repudiandae
            vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Inventore illum nostrum perferendis voluptas, voluptate soluta
            corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
            dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Inventore illum nostrum
            perferendis voluptas, voluptate soluta corrupti dolore quidem.
            Placeat, eaque! Exercitationem est facilis dolor quas odio cum
            incidunt repudiandae vel."
          </p>
        </div>
      </article>
    </>
  );
}
