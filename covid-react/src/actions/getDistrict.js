import { ApiUrls, Capitalize } from "../helpers/Api";
import {
  district_wise_data,
  selected_state_base_num,
  selected_state_trends,
  state_time_series,
  state_wise,
  toggleWhatToDisplay,
} from "./index";
import axios from "axios";
// this is auth
export function ToggleWhatToDisplay(whatToDisplay) {
  return {
    type: toggleWhatToDisplay,
    data: whatToDisplay,
  };
}

export function districtData(data, location) {
  return {
    type: district_wise_data,
    data: data,
    location,
  };
}

export function getStateTrendsData(data) {
  return {
    type: selected_state_trends,
    data: data,
  };
}

export function getDistrictWiseData(location) {
  return function (dispatch) {
    let urls = ApiUrls.district_time_series();

    axios
      .get(urls, {
        params: {
          apiName: district_wise_data,
          location: location,
        },
      })
      .then((res) => {
        return dispatch(districtData(res.data, location));
      });
  };
}

export function getStateTrends(location) {
  return function (dispatch) {
    let urls = ApiUrls.case_time_series(location);
    let data;
    axios
      .get(urls, {
        params: {
          apiName: state_time_series,
          location: location,
        },
      })
      .then((res) => {
        data = res.data;
        return dispatch(getStateTrendsData(res.data, location));
      });
  };
}

export function getBaseStateData(data) {
  return {
    data: data,
    type: selected_state_base_num,
  };
}

export function getSelectedSateBaseNum(location) {
  return function (dispatch) {
    let urls = ApiUrls.selected_state_base_num();
    let data;
    axios
      .get(urls, {
        params: {
          apiName: state_wise,
          location: location,
        },
      })
      .then((res) => {
        data = res.data.data;
        return dispatch(getBaseStateData(res.data, location));
      });
  };
}
