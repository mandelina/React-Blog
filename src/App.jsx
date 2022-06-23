import React from "react";
import Homepage from "./page/homepage/Homepage";
import Contents from "./page/content/Contents";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./reset.css";
import "./global.css";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/react-blog" component={Homepage} exact />
          <Route path="/react-blog/post" component={Contents} exact />
        </Switch>
      </Router>
    </>
  );
}
