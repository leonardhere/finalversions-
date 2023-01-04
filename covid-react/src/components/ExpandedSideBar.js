import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default class ExpandedSideBar extends Component {
  onHoverOut = () => {
    let elem = document.getElementById("ExpandedSideBar");
    let pos = 100;

    this.animation = true;
    function animate() {
      if (pos === 0) {
        elem.style.display = "none";

        clearInterval(id);
      } else {
        pos -= 5;
        elem.style.left = pos + "%";
      }
    }
    let id = setInterval(animate, 1);
  };
  render() {
    let isLoggedIn = this.props.isLoggedIn;
    return (
      <div className="Expand" id="ExpandedSideBar">
        <div className="Links">
          <div className="Element expandedList">
            <Link to="/dashboard" id="LoginLink">
              Home
            </Link>
          </div>
          <div className="Element expandedList">
            <Link to="/AboutUs" id="LoginLink">
              About US
            </Link>
          </div>
          <div className="Element expandedList trnd">
            <Link to="/statewise" id="LoginLink">
              Trend
            </Link>
          </div>
          {isLoggedIn && (
            <div
              className="Element expandedList sgnout"
              onClick={this.props.signMeOut}
            >
              Sign Out
            </div>
          )}
          {!isLoggedIn && (
            <div className="Element expandedList">
              <Link to="/Login" id="LoginLink">
                Login
              </Link>
            </div>
          )}
          <div className="Element expandedList prd">
            <a
              href="https://covid19vaccinationprediction.herokuapp.com/"
              id="LoginLink"
              target="_blank"
            >
              Predictions
            </a>
          </div>
          <div className="Element expandedList tri">
            <Link to="/triage" id="LoginLink">
              Triage
            </Link>
          </div>
          <div className="Element expandedList tri">
            <Link to="/profile" id="LoginLink">
              Profile
            </Link>
          </div>
          <div className="Element expandedList" onClick={this.onHoverOut}>
            Close
          </div>
        </div>
      </div>
    );
  }
}

//Thiis is bar chart
