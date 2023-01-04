import { beginUpdate, updateFailed, updateSuccess } from "../actions";

const initialUpdatereducer = {
  message: "",
  inProgress: false,
};

export default function updateReducer(state = initialUpdatereducer, action) {
  switch (action.type) {
    case beginUpdate: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case updateSuccess: {
      return {
        ...state,
        inProgress: false,
        message: action.message,
      };
    }
    case updateFailed: {
      return {
        ...state,
        inProgress: false,
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
