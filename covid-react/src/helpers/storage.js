import jwt_decode from "jwt-decode";
import { logoutFunction, setAuthenticatedUserFunction } from "../actions/auth";
export function getUserFromLocalStorage() {
  if (localStorage.getItem("token"))
    return jwt_decode(localStorage.getItem("token"));
}

export function CheckAuth(dispatch) {
  let user = getUserFromLocalStorage();
  let currentDate = new Date();

  if (user) {
    if (user.exp * 1000 > currentDate.getTime() && dispatch) {
      dispatch(setAuthenticatedUserFunction(user));
      return true;
    } else {
      dispatch(logoutFunction());
      return false;
    }
  }
}

//this is storage
