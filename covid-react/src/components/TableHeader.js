import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    let { keys } = this.props;
    return (
      <div className="tableHeader">
        {keys.map((key) => (
          <div className="tableContent">
            <div className="tableContentHead" id={key} key={key}>
              {key}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TableHeader;

//Thiis is bar chart
