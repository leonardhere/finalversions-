import React from "react";
import "../sidebar.style.css";
import { logoutFunction, setAuthenticatedUserFunction } from "../actions/auth";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
class newSideBar extends React.Component {
  signMeOut = (e) => {
    e.preventDefault();
    this.props.dispatch(logoutFunction());
    return <Redirect to="/Login" />;
  };
  render() {
    let isLoggedIn = this.props.auth.isLoggedIn;
    return (
      <div>
        <div className="sidebar-left">
          <div className="sidebar-inner">
            <a href="#one">
              <Link to="/Dashboard">
                {" "}
                <div className="link">Dashboard</div>
              </Link>
            </a>
            <a href="#two">
              <Link to="/triage">
                <div className="link">Triage Chatbot</div>
              </Link>
            </a>
            <a href="#third">
              <Link to="/statewise">
                <div className="link">Trends</div>
              </Link>
            </a>
            <a target="_blank" href="https://covid19vaccinationprediction.herokuapp.com/">
              <div className="link">Vaccination Predictor</div>
            </a>
            <a href="#third">
              <Link to="/AboutUs">
                <div className="link">About Us</div>
              </Link>
            </a>
            <a href="#four">
              {!isLoggedIn && (
                <Link to="/login">
                  <div className="link">Login</div>
                </Link>
              )}
            </a>
            <a href="#four">
              {isLoggedIn && (
                <Link to="/login">
                  <div className="link" onClick={this.signMeOut}>
                    Sign Out
                  </div>
                </Link>
              )}
            </a>
          </div>

          <div className="social">
            <a href="https://github.com/javaBeans-VIT">
              <div className="link">GitHub</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
const connectedSideBarComponent = connect(mapStateToProps)(newSideBar);
export default connectedSideBarComponent;
