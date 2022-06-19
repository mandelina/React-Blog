import React from "react";
import "./header.css";
import "./button.css";
import iconWhite from "../../assets/icon-modify-white.svg";
import iconLogout from "../../assets/icon-logout.svg";
import logo from "../../assets/Logo.svg";
import profile from "../../images/profile.jpg";

function WriteBtn() {
  return (
    <li>
      <a href="#" className="button">
        <img src={iconWhite} alt="" />
        <span>Write</span>
      </a>
    </li>
  );
}

function LogoutBtn() {
  return (
    <li>
      <button className="button white">
        <img src={iconLogout} alt="" />
        <span>Logout</span>
      </button>
    </li>
  );
}

function ProfileImg() {
  return (
    <li className="profile-img">
      <a href="#">
        <img src={profile} alt="My Page" />
      </a>
    </li>
  );
}

function Logo() {
  return (
    <>
      <h1>
        <a href="./">
          <img src={logo} alt="My Blog" />
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
