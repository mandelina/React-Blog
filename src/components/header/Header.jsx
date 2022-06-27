import React from "react";
import "./header.css";
import "./button.css";
import iconWhite from "../../assets/icon-modify-white.svg";
import iconLogout from "../../assets/icon-logout.svg";
import iconLogin from "../../assets/icon-login.svg";
import register from "../../assets/icon-register.svg";
import logo from "../../assets/Logo.svg";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

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

function RegisterBtn() {
  return (
    <li>
      <a href="#" className="button">
        <img src={register} alt="" />
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

function LoginBtn() {
  return (
    <li>
      <button className="button white">
        <img src={iconLogin} alt="" />
        <span>Login</span>
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
        <Link to="/react-blog">
          <img src={logo} alt="My Blog" />
        </Link>
      </h1>
    </>
  );
}

function LogoutHeader() {
  return (
    <header>
      <div className="max-width">
        <RegisterBtn />
        <LoginBtn />
      </div>
    </header>
  );
}

function loginHeader() {
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

export default function Header() {
  const [logInfo, setLogin] = useState(true);
  function ToggleLoginBtn() {
    setLogin((logstate) => !logstate);
  }
  console.log(logInfo);

  return (
    <>
      <header>
        <div className="max-width">
          <Logo />

          <ul>
            <ProfileImg />
            <WriteBtn />
            <LogoutBtn onClick={ToggleLoginBtn} />
          </ul>
        </div>
      </header>
    </>
  );
}
