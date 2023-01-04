import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
export default class barChart extends Component {
  render() {
    let labels = [];
    let data = [];
    let { whatToDisplay, district } = this.props;

    district.forEach((element) => {
      labels.push(element.District);
      data.push(element[whatToDisplay]);
    });
    console.log(whatToDisplay);
    return (
      <div>
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: whatToDisplay,
                data: data,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={200}
        />
      </div>
    );
  }
}

//Thiis is bar chart
