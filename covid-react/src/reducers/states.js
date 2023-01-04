import {
  case_time_series,
  state_time_series,
  state_wise,
} from "../actions/index";

const initialStatereducer = {
  state: {},
  chartData: [],
  location: "",
};

export default function state(state = initialStatereducer, action) {
  switch (action.type) {
    case state_wise:
      return {
        ...state,
        state: action.data,
      };
    case case_time_series: {
      return {
        ...state,
        chartData: action.data.data,
        location: action.location,
      };
    }
    case state_time_series: {
      return {
        ...state,
        chartData: action.data.data,
        location: action.location,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

//this is storage
