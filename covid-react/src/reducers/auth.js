import {
  beginLogin,
  loginFailed,
  loginSuccess,
  logoutUser,
  setAuthenticatedUser,
} from "../actions";

const intialAuthReducer = {
  user: {},
  error: null,
  inProgress: false,
  isLoggedIn: false,
};

export default function auth(state = intialAuthReducer, action) {
  switch (action.type) {
    case beginLogin: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case loginSuccess: {
      return {
        ...state,
        inProgress: false,
        isLoggedIn: true,
        error: null,
        user: action.user,
      };
    }
    case loginFailed: {
      return {
        ...state,
        inProgress: false,
        isLoggedIn: false,
        error: action.error,
      };
    }
    case setAuthenticatedUser: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    }
    case logoutUser: {
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

//this is storage
