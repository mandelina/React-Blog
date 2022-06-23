import React from "react";
import FaceBook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import Github from "../assets/Github.svg";
import "./sns.css";

export default function Sns() {
  return (
    <>
      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <a href="#">
            <img src={FaceBook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Github} alt="GitHub" />
          </a>
        </li>
      </ul>
    </>
  );
}
