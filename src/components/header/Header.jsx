import React from "react";
import "./header.css";
import "./button.css";
// import icon "./assets/icon-modify-white.svg";

function WriteBtn() {
  return (
    <li>
      <a href="#" className="button">
        <img
          src={require("../../assets/icon-modify-white.svg").default}
          alt=""
        />
        <span>Write</span>
      </a>
    </li>
  );
}

function LogoutBtn() {
  return (
    <li>
      <button className="button white">
        <img src={require("../../assets/icon-logout.svg").default} alt="" />
        <span>Logout</span>
      </button>
    </li>
  );
}

function ProfileImg() {
  return (
    <li className="profile-img">
      <a href="#">
        <img src={require("../../images/profile.jpg").default} alt="My Page" />
      </a>
    </li>
  );
}

function Logo() {
  return (
    <>
      <h1>
        <a href="./">
          <img src={require("../../assets/Logo.svg").default} alt="My Blog" />
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
