import React, { Component } from "react";
import { Screen } from "./components/index";
import { getUserFromLocalStorage, CheckAuth } from "./helpers/storage";
import "./App.css";
import { connect } from "react-redux";
import { logoutFunction, setAuthenticatedUserFunction } from "./actions/auth";
import { Redirect } from "react-router";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let called = CheckAuth(this.props.dispatch);
  }
  render() {
    return (
      <div>
        <Screen />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;

// export default App;

// //this is storage
