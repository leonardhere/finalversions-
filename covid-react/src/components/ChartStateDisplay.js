import React, { Component } from "react";
import { ChartDisplay } from "./index";
export default class ChartStateDisplay extends Component {
  populateData(data) {
    let totalConfirmed = [];
    let labels = [];
    let totalRecovered = [];
    let deceased = [];
    let title = ["Confirmed", "Recovered", "Deceased"];
    data.map((elem) => {
      totalConfirmed.push(elem["Confirmed"]);
      totalRecovered.push(elem["Recovered"]);
      deceased.push(elem["Deceased"]);
      if (elem["Month"] !== undefined) labels.push(elem["Month"]);
      else labels.push(elem["Date"].split(" ")[1]);
    });
    return {
      totalConfirmed,
      labels,
      title,
      totalRecovered,
      deceased,
    };
  }
  render() {
    let newData;
    let data = {};
    let labels;
    let title;
    if (this.props.district.selectedStateData) {
      newData = this.props.district.selectedStateData;
      let obj = this.populateData(newData);
      data.totalConfirmed = obj.totalConfirmed;
      data.totalRecovered = obj.totalRecovered;
      data.deceased = obj.deceased;
      title = obj.title;
      labels = obj.labels;
    }
    return (
      <div>
        {Object.keys(data).map((key, index) => (
          <div className="chartBox">
            {newData !== undefined && (
              <ChartDisplay
                data={data[key]}
                labels={labels}
                title={title[index]}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

//Thiis is bar chart
