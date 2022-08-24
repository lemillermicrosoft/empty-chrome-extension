import _ from "lodash";
import {
  default as React,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { animated, useSpring } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import "../../styles/Popup.scss";
import { MessageType } from "../../types";

const HamburgerMenu = () => {
  return (
    <svg width="32" height="32">
      <g fill="none">
        <path d="M0 0h32v32H0z" />
        <path
          d="M8 10h16v1H8zm0 5.5h16v1H8zM8 21h16v1H8z"
          fill="#5C5C5C"
          opacity=".7"
        />
      </g>
    </svg>
  );
};

function Popup() {
  const onClick = useCallback(() => {
    chrome.tabs.create({ url: "options.html" });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a onClick={onClick} className="options-menu-button" href="Options">
          <HamburgerMenu />
        </a>
        <h1>Default Extension</h1>
      </header>
      <div className="App-body"></div>
    </div>
  );
}

export default Popup;
