import React, { Component } from "react";
import Triage from "./triage";
import io from "socket.io-client";
import { Redirect, Router } from "react-router-dom";
import GroupMultiple from "./GroupMultiple";
import { connect } from "react-redux";
import "../chat.css";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [], // {content: 'some message', self: true}
      typedMessage: "",
      chatRoom: "",
      curQuesId: "",
      type: "",
      triage: {},
    };

    this.socket = io.connect("http://54.82.41.39:5000", {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
    });
  }
  componentDidUpdate() {
    let { email, id, gender, age } = this.props.auth.user;
    if (email) {
      this.connectionHandler(email, id, gender, age);
    }
    console.log("this is cmpdu");
    this.scrollToBottom();
  }
  connectionHandler = (email, userid, gender, age) => {
    console.log("connection Handler");
    if (email) {
      let self = this;
      this.socket.on("connect", function () {
        self.socket.emit("joinChat", {
          chatRoom: "chatBot" + userid,
          email,
          gender,
          age,
        });
      });

      this.socket.on("chatBotActivated", function (data) {
        let messages = self.state.messages;
        messages.push(data);
        self.setState({
          chatRoom: "chatBot" + userid,
          messages: messages,
          type: data.type,
        });
      });
    }
  };
  scrollToBottom() {
    let myDiv = document.querySelector(".chat-messages");
    if (myDiv) myDiv.scrollTop = myDiv.scrollHeight;
  }
  componentDidMount() {
    let self = this;
    this.socket.on("setQuestion", function (data) {
      let messages = self.state.messages;
      messages.push(data);
      self.setState({
        messages: messages,
        type: data.type,
      });
    });
    this.socket.on("triage", function (data) {
      self.setState({
        triage: data,
        type: data.type,
      });
    });
    let { email, id, gender, age } = this.props.auth.user;
    if (email) {
      this.connectionHandler(email, id, gender, age);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let inp = document.getElementsByClassName(this.state.type);
    let evidence = [];
    for (let i = 0; i < inp.length; i++) {
      let newEvidence = {
        id: inp[i].name,
        value: inp[i].checked,
      };
      evidence.push(newEvidence);
    }
    this.socket.emit("sendAns", {
      data: evidence,
      type: this.state.type,
    });
  };
  render() {
    const { typedMessage, messages, type, triage } = this.state;
    let lastIndex = messages.length;
    if (!localStorage.token) {
      return <Redirect to="/Login" />;
    }
    return (
      <div>
        <div className="chat-container">
          <div className="chat-header">Triage / Chat Bot</div>
          <div className="chat-messages">
            {messages !== [] &&
              type !== "triage" &&
              messages.map((message, index) => (
                <div>
                  <GroupMultiple
                    message={message.data}
                    type={type}
                    index={index}
                    lastIndex={lastIndex - 1}
                  />
                </div>
              ))}
            {type === "triage" && (
              <div>
                <Triage triage={triage} />
              </div>
            )}
          </div>
          <div className="chat-footer">
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

const connectedChatComponent = connect(mapStateToProps)(Chat);
export default connectedChatComponent;

//Thiis is bar chart
