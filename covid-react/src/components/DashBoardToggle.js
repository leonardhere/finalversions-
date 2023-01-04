import React, { Component } from "react";
import { setDisplayDashboard } from "../actions/setDashboard";
export default class DashBoardToggle extends Component {
  toggleTabs = (e) => {
    this.props.dispatch(setDisplayDashboard(e.target.innerText));
  };
  render() {
    let { display } = this.props.display;
    return (
      <div>
        <div className="tabs">
          {display === "Tweets" && (
            <div className="tab active1" onClick={this.toggleTabs}>
              Tweets
            </div>
          )}
          {display !== "Tweets" && (
            <div className="tab " onClick={this.toggleTabs}>
              Tweets
            </div>
          )}
          {display === "Hospitals" && (
            <div className="tab active1" onClick={this.toggleTabs}>
              Hospitals
            </div>
          )}
          {display !== "Hospitals" && (
            <div className="tab" onClick={this.toggleTabs}>
              Hospitals
            </div>
          )}

          {display === "Oxygen" && (
            <div className="tab active1" onClick={this.toggleTabs}>
              Oxygen
            </div>
          )}
          {display !== "Oxygen" && (
            <div className="tab " onClick={this.toggleTabs}>
              Oxygen
            </div>
          )}
          {/* {display === "Medicine" && (
            <div className="tab active" onClick={this.toggleTabs}>
              Medicine
            </div>
          )}
          {display !== "Medicine" && (
            <div className="tab" onClick={this.toggleTabs}>
              Medicine
            </div>
          )} */}
        </div>
      </div>
    );
  }
}

//Thiis is bar chart
