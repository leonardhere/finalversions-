import React from "react";

import "../hamburgerer.style.css";
import NewSideBar from "./newSideBar.js";

export const Hamburger = () => (
  <div
    className="outer-ham"
    onClick={() => {
      document.getElementById("1").classList.toggle("rot-down");
      document.getElementById("3").classList.toggle("rot-up");
      document.getElementById("2").classList.toggle("slide");

      document
        .getElementById("sidebar-control")
        .classList.toggle("sidebar-slide");
    }}
  >
    <div className="inner-ham">
      <div className="menu" id="1"></div>
      <div className="menu" id="2"></div>
      <div className="menu" id="3"></div>
    </div>
    <div id="sidebar-control">
      <NewSideBar />
    </div>
  </div>
);
