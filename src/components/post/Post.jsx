import React from "react";
import Category from "../category/Category";
import Author from "../author/Author";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ src }) {
  console.log(src);
  return (
    <>
      <Link to="/react-blog/post">
        <li>
          <article className="post">
            <img src={"/react-blog" + src} />
            <div className="contents-wrap">
              <Category />
              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
              <Author />
              <p className="post-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore illum nostrum perferendis voluptas, voluptate soluta
                corrupti dolore quidem. Placeat, eaque! Exercitationem est
                facilis dolor quas odio cum incidunt repudiandae vel. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                illum nostrum perferendis voluptas, voluptate soluta corrupti
                dolore quidem. Placeat, eaque! Exercitationem est facilis dolor
                quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel."
              </p>
            </div>
          </article>
        </li>
      </Link>
    </>
  );
}
