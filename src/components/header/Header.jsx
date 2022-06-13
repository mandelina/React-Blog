import React from "react";
import "./header.css";
import "./button.css";

function WriteBtn() {
  const url = "/assets/icon-modify-white.svg";
  return (
    <li>
      <a href="#" className="button">
        <img src={url} alt="" />
        <span>Write</span>
      </a>
    </li>
  );
}

function LogoutBtn() {
  const url = "/assets/icon-logout.svg";
  return (
    <li>
      <button className="button white">
        <img src={url} alt="" />
        <span>Logout</span>
      </button>
    </li>
  );
}

function ProfileImg() {
  const url = "/assets/profile.jpg";
  return (
    <li className="profile-img">
      <a href="#">
        <img src={url} alt="My Page" />
      </a>
    </li>
  );
}

function Logo() {
  const url = "/assets/Logo.svg";
  return (
    <>
      <h1>
        <a href="./">
          <img src={url} alt="My Blog" />
        </a>
      </h1>
    </>
  );
}

export default function Header() {
  return (
    <header>
      <div className="max-width">
        <Logo />
        <ul>
          <ProfileImg />
          <WriteBtn />
          <LogoutBtn />
        </ul>
      </div>
    </header>
  );
}
