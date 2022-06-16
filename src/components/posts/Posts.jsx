import React from "react";
import Post from "../post/Post";

export default function Posts() {
  return (
    <>
      <h2 className="a11y-hidden">Post</h2>
      <ul className="posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </>
  );
}
