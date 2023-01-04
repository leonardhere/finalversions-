import axios from "axios";
import qs from "qs";
import {
  beginSignUp,
  setSignUpSuccessFalse,
  signUpFailed,
  signUpSuccess,
} from ".";
import { ApiUrls } from "../helpers/Api";

export function isSigningUp() {
  return {
    type: beginSignUp,
  };
}

export function setsucessFalse() {
  return {
    type: setSignUpSuccessFalse,
  };
}

export function registrationSuccess(message) {
  return {
    message: message,
    type: signUpSuccess,
  };
}

export function signUpFailedFunction(message) {
  return {
    message: message,
    type: signUpFailed,
  };
}
export const setSignUp = (user) => {
  return function (dispatch) {
    dispatch(isSigningUp());
    console.log(user);
    let urls = ApiUrls.signUp();
    let headers = { "content-type": "application/x-www-form-urlencoded" };
    axios
      .post(urls, qs.stringify(user), {
        headers: headers,
      })
      .then((data) => {
        let { message, success } = data.data.data;
        if (success) {
          return dispatch(registrationSuccess(message));
        } else {
          return dispatch(signUpFailedFunction(message));
        }
      });
  };
};

// this is auth
