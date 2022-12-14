import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Content from "./Content";
import Popup from "./Popup";

function Options() {
  return (
    <Router>
      <div>
        <div>
          <h1>Default Extension - Options</h1>
        </div>
        <Switch>
          <Route exact path="/popup">
            <Popup />
          </Route>
          <Route exact path="/foreground">
            <Content />
          </Route>
          <Route exact path="/">
            <Redirect to="/options.html" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Options;
