import React from "react";
import "./likeBtn.css";
import { useState } from "react";

export default function LikeBtn() {
  const [like, setLike] = useState(true);

  function ToggleLikeBtn() {
    setLike((Like) => !Like);
  }

  console.log(like);
  return (
    <button
      onClick={ToggleLikeBtn}
      className={like === true ? "btn-like" : "btn-like-on"}
    >
      Like
    </button>
  );
}
