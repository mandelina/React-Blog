import React from "react";
import Main from "./components/main/Main";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./global.css";

const GlobalStyle = createGlobalStyle`
   ${reset}
 `;

export default function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Main />
    </>
  );
}
