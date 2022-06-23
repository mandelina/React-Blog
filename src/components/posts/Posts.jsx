import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Post from "../post/Post";
import "./posts.css";
import { data } from "../../assets/data/data";
import Aside from "../aside/Aside";

export default function Posts() {
  console.log(data);
  return (
    <main>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <ul className="posts">
          {data.posts.map((item) => (
            <Post key={item.id} src={item.thumbnail} />
          ))}
        </ul>
        <Aside />
      </div>
    </main>
  );
}
