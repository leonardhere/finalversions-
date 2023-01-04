import React, { Component } from "react";

export default class TwitterBox extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="tweetBox">
          <div className="TweetBoxHeader stateName ">
            {this.props.screenName}
            <div className="hashTags">
              {this.props.hashtag.map((tag) => (
                <span className="tag">#{tag}</span>
              ))}
            </div>
          </div>
          <div className="TweetBoxBody">{this.props.txt}</div>
        </div>
      </div>
    );
  }
}

//Thiis is bar chart
