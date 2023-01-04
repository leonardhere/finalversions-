import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {
  Charts,
  Table,
  Map,
  TableHeader,
  getStateData,
  getCaseTimeSeries,
} from "./index";
class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getStateData());
    this.props.dispatch(getCaseTimeSeries("India"));
  }

  render() {
    let keys;
    let datas;
    if (this.props.state.state.data) {
      datas = this.props.state.state.data.finalDataArray;
      keys = ["State", "Confirmed", "Recovered", "Deaths", "Active"];
      keys.pop();
    }
    return <Redirect to="/Dashboard" />
    return (
      <div>
        <div id="tableScreen">
          {this.props.state.state.data && <TableHeader keys={keys} />}
          <div id="contentInTable">
            {this.props.state.state.data !== undefined &&
              datas.map((data) => <Table data={data} keys={keys} />)}
          </div>
        </div>
        <div>
          <Map />
        </div>
        <div>
          <Charts />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.state,
  };
}

const connectedHomeComponent = connect(mapStateToProps)(Home);
export default connectedHomeComponent;
//Thiis is bar chart
