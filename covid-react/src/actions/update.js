import axios from "axios";
import { beginUpdate, updateFailed, updateSuccess } from ".";
import { ApiUrls } from "../helpers/Api";
import qs from "qs";
export function beginUpdateCall() {
  return {
    type: beginUpdate,
  };
}

export function updateSucessCall(message) {
  return {
    type: updateSuccess,
    message: message,
  };
}

export function failedUpdateCall(message) {
  return {
    type: updateFailed,
    message,
  };
}

export function updateCall(user) {
  return function (dispatch) {
    dispatch(beginUpdateCall());
    let urls = ApiUrls.profile();
    let headers = { "content-type": "application/x-www-form-urlencoded" };
    axios
      .post(urls, qs.stringify(user), {
        headers: headers,
      })
      .then((data) => {
        let message = data.data.data.message;
        let success = data.data.data.success;
        if (success) {
          return dispatch(updateSucessCall(message));
        } else {
          return dispatch(failedUpdateCall(message));
        }
      });
  };
}
