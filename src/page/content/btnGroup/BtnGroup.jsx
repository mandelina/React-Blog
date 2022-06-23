import React from "react";
import "./btnGroup.css";
import { Link } from "react-router-dom";

export default function BtnGroup() {
  return (
    <div class="btn-group">
      <Link to="/react-blog/post" class="btn-modify">
        <span class="a11y-hidden">modify</span>
      </Link>

      <button type="button" class="btn-delete">
        <span class="a11y-hidden">delete</span>
      </button>
    </div>
  );
}
