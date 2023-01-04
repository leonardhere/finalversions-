import React, { Component } from "react";
import { TwitterBox } from "./index";
export default class DashboardBody extends Component {
  render() {
    let { tweets } = this.props;
    tweets = tweets.data;
    // console.log(tweets);
    return (
      <div className="DashboardBodyRenderPart">
        {tweets.map((tweet) => (
          <a href={tweet.userLink}>
            {" "}
            <TwitterBox {...tweet} />
          </a>
        ))}
      </div>
    );
  }
}

//Thiis is bar chart
