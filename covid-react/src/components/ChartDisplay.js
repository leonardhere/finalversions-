import React, { Component } from "react";
import { Line } from "react-chartjs-2";
export default class chartDisplay extends Component {
  constructor(props) {
    super();
  }
  render() {
    let { data, labels, title } = this.props;
    return (
      <div>
        {labels !== undefined && (
          <Line
            data={{
              labels: labels,
              datasets: [
                {
                  label: title,
                  data: data,
                  fill: false,
                  borderColor: "#057bfe",
                  tension: 0.1,
                },
              ],
            }}
          />
        )}
      </div>
    );
  }
}

//Thiis is bar chart
