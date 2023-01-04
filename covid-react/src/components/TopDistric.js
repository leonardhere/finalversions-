import React, { Component } from "react";
import { ContentLeftContent, BarChart } from "./index";

export default class TopDistric extends Component {
  render() {
    let district = this.props.district;
    let { whatToDisplay } = this.props;

    let data;
    return (
      <div>
        <div className="TopDistrict">
          <div className="TopDistrictTitle">Top Districts</div>
          <div className="Content">
            <div className="ContentLeft">
              {district.map((data) => (
                <ContentLeftContent
                  {...data}
                  whatToDisplay={whatToDisplay}
                  dispatch={this.props.dispatch}
                />
              ))}
            </div>
            <div className="districtDataChart">
              <BarChart whatToDisplay={whatToDisplay} district={district} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Thiis is bar chart
