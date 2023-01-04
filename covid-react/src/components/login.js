import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { startAuthFunction } from "../actions/auth";
import { connect } from "react-redux";
import {
  checkEmailValidation,
  checkPasswordValidation,
} from "../helpers/validation";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  changeEmailValue = (e) => {
    // e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };
  changePasswodValue = (e) => {
    // e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmitForm = (e) => {
    e.preventDefault();
    let validateEmail = checkEmailValidation(this.state.email);
    let validatePassword = checkPasswordValidation(this.state.password);
    let proceed = validateEmail && validatePassword;
    if (proceed) {
      this.props.dispatch(startAuthFunction(this.state));
    }

    //
    // console.log(this.state);
  };

  render() {
    let { inProgress, error, isLoggedIn } = this.props.auth;
    if (isLoggedIn) {
      return <Redirect to="/statewise" />;
    }
    return (
      <div className="container">
        <div className="outer-wrapper">
          <div className="form-head">Login</div>
          <div className="form-content">
            <form>
              {error && <div className="error">{error}</div>}
              <div className="form-inp">
                <input
                  type="email"
                  className="eml"
                  placeholder="Email"
                  onChange={this.changeEmailValue}
                />
              </div>
              <div className="form-inp" id="pass">
                <input
                  type="password"
                  placeholder="Password"
                  className="eml"
                  onChange={this.changePasswodValue}
                />
              </div>
              <div>
                <Link to="/SignUp">
                  <span className="SignUPlink">Dont Have An Account</span>
                </Link>
              </div>
              <div className="submit-btn">
                {inProgress == false && (
                  <button
                    type="submit"
                    className="submit-btn1"
                    onClick={this.handleSubmitForm}
                  >
                    Proceed
                  </button>
                )}

                {inProgress && (
                  <button type="submit" className="submit-btn1">
                    in Progress
                  </button>
                )}
              </div>
            </form>
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

const connectedLoginComponent = connect(mapStateToProps)(Login);
export default connectedLoginComponent;

//Thiis is bar chart
