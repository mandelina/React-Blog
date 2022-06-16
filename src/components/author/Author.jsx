import React from "react";
import "./author.css";

export default function Author() {
  return (
    <dl className="author-wrap">
      <dt className="a11y-hidden">Author</dt>
      <dd className="author">
        <img src="assets/images/profile.jpg" alt="칠리" />
        Chilli
      </dd>
      <dt className="a11y-hidden">Created</dt>
      <dd className="created">2022.05.25</dd>
    </dl>
  );
}
