import React, { Component } from "react";
import covertNumToDisplay from "../helpers/Form";
export default class ContentLeftContent extends Component {
  render() {
    let { District, Confirmed, whatToDisplay, Recovered, Active, Deceased } =
      this.props;
    Confirmed = covertNumToDisplay(Confirmed);
    return (
      <div>
        <div className="ContentLeftContent">
          {whatToDisplay == "Confirmed" && (
            <div className="numberLeft">{Confirmed}</div>
          )}
          {whatToDisplay == "Confirmed" && (
            <div className="place">{District}</div>
          )}
          {whatToDisplay == "Recovered" && (
            <div className="numberLeft">{Recovered}</div>
          )}
          {whatToDisplay == "Recovered" && (
            <div className="place">{District}</div>
          )}
          {whatToDisplay == "Active" && (
            <div className="numberLeft">{Active}</div>
          )}
          {whatToDisplay == "Active" && <div className="place">{District}</div>}
          {whatToDisplay == "Deceased" && (
            <div className="numberLeft">{Deceased}</div>
          )}
          {whatToDisplay == "Deceased" && (
            <div className="place Deceased">{District}</div>
          )}
        </div>
      </div>
    );
  }
}

//Thiis is bar chart
