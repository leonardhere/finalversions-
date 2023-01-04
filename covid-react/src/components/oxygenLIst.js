import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export default class OxygenLIst extends Component {
  render() {
    let { oxyList } = this.props;
    return (
      <div>
        <div className="DashboardBodyRenderPart">
          {oxyList.map((elem) => (
            <div className="tweetBox">
              <div className="TweetBoxHeader stateName ">
                {elem.name}
                <div>{elem.district}</div>
              </div>

              <div className="TweetBoxBody comment">
                {elem.title}
                <div>{elem.district}</div>
                <div className="footerHos">
                  <div>
                    Contact:
                    {/* <FontAwesomeIcon className="phone" icon={faPhone} /> */}
                    <span> </span>
                    <span> </span>
                    {/* <FontAwesomeIcon className="phone" icon={faPhone} /> */}
                    <span> </span>
                    <span> </span>
                    {elem.phone_1}
                  </div>
                  <div>Verified on : {elem.last_verified_on}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

//Thiis is bar chart
