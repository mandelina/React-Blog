import React from "react";
import "./btnBack.css";
import { Link } from "react-router-dom";

export default function BtnBack() {
  return (
    <Link to="/react-blog" class="btn-back">
      <span class="a11y-hidden">Back</span>
    </Link>
  );
}
