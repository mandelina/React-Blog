import React from "react";
import Homepage from "./components/homepage/Homepage";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./global.css";
import "./reset.css";

const GlobalStyle = createGlobalStyle`
   ${reset}
   ul { list-style: none; }
 `;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Homepage />
    </>
  );
}
