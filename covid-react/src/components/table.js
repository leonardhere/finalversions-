import React, { Component } from "react";

class table extends Component {
  render() {
    const { keys, data } = this.props;

    return (
      <div className="table-body">
        {keys.map((key) => (
          <div className="tableContent table-body-content">
            <div
              className="tableContentHead table-body-data"
              id={key}
              key={key}
            >
              {data[key]}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default table;

//Thiis is bar chart
