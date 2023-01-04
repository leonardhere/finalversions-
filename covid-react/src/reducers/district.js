import {
  district_wise_data,
  selected_state_trends,
  selected_state_base_num,
  toggleWhatToDisplay,
} from "../actions";

const initialDistrictreducer = {
  districtData: [],
  location: "",
  selectedStateData: [],
  baseStateData: {},
  whatToDisplay: "Confirmed",
};

export default function district(state = initialDistrictreducer, action) {
  switch (action.type) {
    case district_wise_data: {
      return {
        ...state,
        districtData: action.data.data,
        location: action.location,
      };
    }
    case selected_state_trends: {
      return {
        ...state,
        selectedStateData: action.data.data,
      };
    }
    case selected_state_base_num: {
      return {
        ...state,
        baseStateData: action.data,
      };
    }
    case toggleWhatToDisplay: {
      return {
        ...state,
        whatToDisplay: action.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

//this is storage
