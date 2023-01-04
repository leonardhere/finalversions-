import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateCall as update } from "../actions/update";

import {
  checkEmailValidation,
  checkGenderValidation,
  validPassAndConfirmPass,
  checkNameValidation,
  checkPasswordValidation,
  checkAgeValidation,
} from "../helpers/validation";
class userProfile extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      newPass: "",
      confirm_pass: "",
      age: "",
      gender: "",
    };
  }
  changePassValue = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  changeNewPasswodValue = (e) => {
    this.setState({
      newPass: e.target.value,
    });
  };
  changeConfimPasswodValue = (e) => {
    this.setState({
      confirm_pass: e.target.value,
    });
  };
  changeAgeValue = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  handleGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  handleSubmitForm = (e) => {
    e.preventDefault();
    let pass =
      checkGenderValidation(this.state.gender) &&
      checkPasswordValidation(this.state.password) &&
      checkPasswordValidation(this.state.newPass) &&
      checkAgeValidation(this.state.age) &&
      validPassAndConfirmPass(this.state.newPass, this.state.confirm_pass);

    let { email } = this.props.auth.user;
    if (email && pass) {
      this.props.dispatch(
        update({
          email: email,
          password: this.state.newPass,
          gender: this.state.gender,
          age: this.state.age,
          oldPass: this.state.password,
        })
      );
    }
  };
  render() {
    let { message, inProgress } = this.props;
    // console.log(inProgress);
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <div className="outer-wrapper">
          <div className="form-head">User Profile</div>
          <div className="form-content">
            <form>
              {message !== "" && <div className="error">{message}</div>}
              <div className="form-inp">
                <input
                  type="password"
                  className="eml"
                  placeholder="current password"
                  onChange={this.changePassValue}
                />
              </div>

              <div className="form-inp" id="pass">
                <input
                  type="password"
                  placeholder="New Password"
                  className="eml"
                  onChange={this.changeNewPasswodValue}
                />
              </div>
              <div className="form-inp" id="pass">
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="eml"
                  onChange={this.changeConfimPasswodValue}
                />
              </div>
              <div className="form-inp" id="pass">
                <input
                  type="number"
                  placeholder="How Young Are You"
                  className="eml"
                  onChange={this.changeAgeValue}
                />
              </div>
              <div className="form-inp" id="pass">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onClick={this.handleGender}
                />{" "}
                <span className="radioSignUp">Male</span>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onClick={this.handleGender}
                />{" "}
                <span className="radioSignUp">Female</span>
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
    message: state.updateReducer.message,
    inProgress: state.updateReducer.inProgress,
  };
}

const connectedProfileComponent = connect(mapStateToProps)(userProfile);
export default connectedProfileComponent;
