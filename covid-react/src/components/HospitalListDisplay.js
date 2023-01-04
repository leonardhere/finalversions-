import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export default class HospitalListDisplay extends Component {
  render() {
    let { hospitalList } = this.props;
    return (
      <div className="DashboardBodyRenderPart">
        {hospitalList.map((hospital) => (
          <div className="tweetBox">
            <div className="TweetBoxHeader stateName ">
              {hospital.title}
              <div>{hospital.district}</div>
            </div>

            <div className="TweetBoxBody comment">
              <div>{hospital.address}</div>
              {hospital.comment}
              <div className="footerHos">
                <div>
                  Contact:
                  {/* <FontAwesomeIcon className="phone" icon={faPhone} /> */}
                  <span> </span>
                  <span> </span>
                  {hospital.phone_1}
                </div>
                {/* <div>Verified on : {hospital.lastVerifiedOn.split("T")[0]}</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

//Thiis is bar chart
