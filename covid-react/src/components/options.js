import React, { Component } from "react";

export default class options extends Component {
  render() {
    let { choices, mail, email, type } = this.props;
    return (
      <div>
        {choices &&
          choices.map((choice) => (
            <div className="chat-bubble self-chat">
              <input
                type="checkbox"
                className={type}
                name={choice.id}
                value="present"
              />
              {choice.name}
            </div>
          ))}
      </div>
    );
  }
}

//Thiis is bar chart
