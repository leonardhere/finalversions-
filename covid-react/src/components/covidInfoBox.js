import React, { Component } from "react";

export default class covidInfoBox extends Component {
  render() {
    let activeRatio;
    let recoveryRatio;
    let caseFatalityRatio;
    let { Confirmed, Deaths, Active, Recovered } = this.props;
    activeRatio = ((parseInt(Active) / parseInt(Confirmed)) * 100).toFixed(2);
    recoveryRatio = ((parseInt(Recovered) / parseInt(Confirmed)) * 100).toFixed(
      2
    );
    caseFatalityRatio = (
      (parseInt(Deaths) / parseInt(Confirmed)) *
      100
    ).toFixed(2);
    return (
      <div className="CovidInfo">
        <div className="CovidInfoBox">
          <div className="CovidInfoBoxHeader">
            <div className="CovidInfoBoxTitle">Confirmed Per Million</div>
            <div className="CovidInfoBoxNumber">41,576.2</div>
            <div className="CovidInfoBoxTitle">India has 13,495.9 CPM</div>
          </div>
          <div className="CovidInfoBoxBody">
            41,576 out of every 10 lakh people in Kerala have tested positive
            for the virus.
          </div>
        </div>
        <div className="CovidInfoBox box2">
          <div className="CovidInfoBoxHeader">
            <div className="CovidInfoBoxTitle">Active Ratio</div>
            <div className="CovidInfoBoxNumber box2Num">{activeRatio}%</div>
            <div className="CovidInfoBoxTitle box2Title">
              India has 13,495.9 CPM
            </div>
          </div>
          <div className="CovidInfoBoxBody box2Body">
            For every 100 confirmed cases, ~{activeRatio} are currently
            infected.
          </div>
        </div>
        <div className="CovidInfoBox box3">
          <div className="CovidInfoBoxHeader">
            <div className="CovidInfoBoxTitle">Recovery Ratio</div>
            <div className="CovidInfoBoxNumber box3Num">{recoveryRatio}%</div>
            <div className="CovidInfoBoxTitle box3Title">
              India has 13,495.9 CPM
            </div>
          </div>
          <div className="CovidInfoBoxBody box3Body">
            For every 100 confirmed cases, ~{recoveryRatio} have recovered from
            the virus.
          </div>
        </div>
        <div className="CovidInfoBox box4">
          <div className="CovidInfoBoxHeader">
            <div className="CovidInfoBoxTitle">Case Fatality Ratio</div>
            <div className="CovidInfoBoxNumber" id="magicbox4">{caseFatalityRatio}</div>
            <div className="CovidInfoBoxTitle box4Title">India has 13,495.9 CPM</div>
          </div>
          <div className="CovidInfoBoxBody" id="magicbox4">
            For every 100 confirmed cases, ~{caseFatalityRatio} have
            unfortunately passed away from the virus.
          </div>
        </div>
      </div>
    );
  }
}

//Thiis is bar chart
