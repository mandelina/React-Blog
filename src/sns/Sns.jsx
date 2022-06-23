import React from "react";
import FaceBook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import Github from "../assets/Github.svg";
import "./sns.css";
import { Link } from "react-router-dom";

export default function Sns() {
  return (
    <>
      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <Link to="/react-blog">
            <img src={FaceBook} alt="Facebook" />
          </Link>
        </li>
        <li>
          <Link to="/react-blog">
            <img src={Twitter} alt="Twitter" />
          </Link>
        </li>
        <li>
          <Link to="/react-blog">
            <img src={Instagram} alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link to="/react-blog">
            <img src={Github} alt="GitHub" />
          </Link>
        </li>
      </ul>
    </>
  );
}
