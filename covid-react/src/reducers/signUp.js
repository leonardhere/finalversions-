import {
  beginSignUp,
  setSignUpSuccessFalse,
  signUpFailed,
  signUpSuccess,
} from "../actions";

const IntialSignUpReducer = {
  message: "",
  inProgress: false,
  success: false,
};

export default function signUP(state = IntialSignUpReducer, action) {
  switch (action.type) {
    case beginSignUp: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case setSignUpSuccessFalse: {
      return {
        ...state,
        message: "",
        inProgress: false,
        success: false,
      };
    }
    case signUpSuccess: {
      return {
        ...state,
        inProgress: false,
        success: true,
        message: action.message,
      };
    }
    case signUpFailed: {
      return {
        ...state,
        inProgress: false,
        success: false,
        message: action.message,
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
