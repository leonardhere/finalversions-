import React, { Component } from "react";
import { connect } from "react-redux";
import { ChartDisplay, MapSearchForm, getCaseTimeSeries } from "./index";
class Charts extends Component {
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
  clickHandler = (e) => {
    e.preventDefault();
    let location = document.getElementById("state").value;
    this.props.dispatch(getCaseTimeSeries(location));
  };
  render() {
    let data = {};
    let labels;
    let title;
    let display = this.props.state.chartData.length;
    if (display !== 0) {
      let obj = this.populateData(this.props.state.chartData);
      data.totalConfirmed = obj.totalConfirmed;
      data.totalRecovered = obj.totalRecovered;
      data.deceased = obj.deceased;
      title = obj.title;
      labels = obj.labels;
    }

    return (
      <div className="Charts">
        <div className="searchForm">
          <form>
            <MapSearchForm />
            <button type="submit" onClick={this.clickHandler}>
              Button{" "}
            </button>
          </form>
        </div>
        {Object.keys(data).map((key, index) => (
          <div className="chartBox">
            {display !== 0 && (
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

function mapStateToProps(state) {
  return {
    state: state.state,
    chartData: state.chartData,
    location: state.location,
  };
}

const connectedChartsComponent = connect(mapStateToProps)(Charts);

export default connectedChartsComponent;

// options: {
//   scales: {
//     x: {
//       type: "time",
//       time: {
//         displayFormats: {
//           quarter: "MMM YYYY",
//         },
//       },
//     },
//   },
// },

//Thiis is bar chart
