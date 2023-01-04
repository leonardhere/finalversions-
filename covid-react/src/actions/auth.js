import axios from "axios";
import qs from "qs";
import jwt_decode from "jwt-decode";
import { ApiUrls } from "../helpers/Api";
import {
  beginLogin,
  loginSuccess,
  loginFailed,
  setAuthenticatedUser,
  logoutUser,
} from "./index";

export function beginLoginFunction() {
  return {
    type: beginLogin,
  };
}

export function loginFailedFunction(error) {
  return {
    type: loginFailed,
    error: error,
  };
}

export function logoutFunction() {
  localStorage.removeItem("token");
  return {
    type: logoutUser,
  };
}

export function loginSuccessFunction(user) {
  return {
    type: loginSuccess,
    user: user,
  };
}

export function setAuthenticatedUserFunction(user) {
  return {
    type: setAuthenticatedUser,
    user: user,
  };
}
// this is auth
export function startAuthFunction(data) {
  return function (dispatch) {
    dispatch(beginLoginFunction());
    let urls;
    urls = ApiUrls.auth();
    let headers = { "content-type": "application/x-www-form-urlencoded" };
    // console.log(data.email);
    axios
      .post(urls, qs.stringify(data), {
        headers: headers,
      })
      .then((data) => {
        if (data.data.data) {
          let token = data.data.data.token;
          //   console.log(token);
          let user = jwt_decode(token);
          localStorage.setItem("token", token);
          return dispatch(loginSuccessFunction(user));
        } else {
          console.log("ji");
          return dispatch(
            loginFailedFunction("failed!! Invalid user name or password")
          );
        }
      });
  };
}
