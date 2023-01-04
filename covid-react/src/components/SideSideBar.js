import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPoll,
  faSignOutAlt,
  faSyringe,
  faUserMd,
  faChartBar,
  faHome,
  faDatabase,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import ExpandedSideBar from "./ExpandedSideBar";
import { logoutFunction, setAuthenticatedUserFunction } from "../actions/auth";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
class SideSideBar extends Component {
  onHover = () => {
    let elem = document.getElementById("ExpandedSideBar");
    let pos = 0;

    if (elem.style.display !== "block") {
      elem.style.display = "block";
      function animate() {
        if (pos === 100) {
          clearInterval(id);
        } else {
          pos = pos + 10;
          elem.style.left = pos + "%";
        }
      }
      let id = setInterval(animate, 10);
    }
  };
  signMeOut = (e) => {
    e.preventDefault();
    console.log("sign out");
    this.props.dispatch(logoutFunction());
    return <Redirect to="/Login" />;
  };
  render() {
    let { isLoggedIn } = this.props.auth;
    return (
      <div className="Sidebar">
        <div className="Title">
          <FontAwesomeIcon icon={faDatabase} />
        </div>
        <div className="Links" onMouseOver={this.onHover}>
          <div className="Element">
            <Link to="/Dashboard" id="LoginLink">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
          <div className="Element">
            <Link to="/AboutUs" id="LoginLink">
              <FontAwesomeIcon icon={faAddressCard} />
            </Link>
          </div>
          <div className="Element">
            <Link to="/statewise" id="LoginLink">
              <FontAwesomeIcon icon={faPoll} />
            </Link>
          </div>
          {isLoggedIn && (
            <div className="Element" onClick={this.signMeOut}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
          )}
          {!isLoggedIn && (
            <div className="Element">
              <Link to="/Login" id="LoginLink">
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            </div>
          )}
          <div className="Element">
            <a
              id="vaccine"
              target="_blank"
              href="https://covid19vaccinationprediction.herokuapp.com/"
            >
              <FontAwesomeIcon icon={faChartBar} />
            </a>
          </div>
          <div className="Element">
            <Link to="/triage" id="LoginLink">
              <FontAwesomeIcon icon={faUserMd} />
            </Link>
          </div>
        </div>

        <div id="End">
          <div className="Element" id="Globe">
            <a
              id="vaccine"
              target="_blank"
              href="https://www.cowin.gov.in/home"
            >
              <FontAwesomeIcon icon={faSyringe} />
            </a>
          </div>
        </div>
        <ExpandedSideBar isLoggedIn={isLoggedIn} signMeOut={this.signMeOut} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
const connectedSideBarComponent = connect(mapStateToProps)(SideSideBar);
export default connectedSideBarComponent;
