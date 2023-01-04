import {
  toggleDashboardDisplay,
  getTweetData,
  getHospitalList,
  getOxyList,
  setDashboardLocation,
} from "../actions";

const intialDashboardReducer = {
  display: "",
  tweets: [],
  location: "Delhi",
  hospitalList: [],
  oxyList: [],
};

export default function dashboard(state = intialDashboardReducer, action) {
  switch (action.type) {
    case toggleDashboardDisplay: {
      return {
        ...state,
        display: action.data,
      };
    }
    case getTweetData: {
      return {
        ...state,
        tweets: action.data,
      };
    }
    case getHospitalList: {
      return {
        ...state,
        hospitalList: action.data,
      };
    }
    case getOxyList: {
      return {
        ...state,
        oxyList: action.data,
      };
    }
    case setDashboardLocation: {
      return {
        ...state,
        location: action.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

//this is storage
