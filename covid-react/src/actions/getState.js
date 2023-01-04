import { ApiUrls } from "../helpers/Api";
import { case_time_series, state_wise, state_time_series } from "./index";
import axios from "axios";
export function statesData(res) {
  return {
    type: state_wise,
    data: res.data.data,
  };
}

export function getStateData() {
  return function (dispatch) {
    let urls = ApiUrls.state_wise();
    axios
      .get(urls, {
        params: { apiName: state_wise },
      })
      .then((res) => {
        return dispatch(statesData(res));
      });
  };
}

export function getChartsData(res, location) {
  return {
    type: case_time_series,
    data: res,
    location: location,
  };
}
export function getStateChartsData(res, location) {
  return {
    type: state_time_series,
    data: res,
    location: location,
  };
}

export function getCaseTimeSeries(location) {
  return function (dispatch) {
    let urls;
    urls = ApiUrls.case_time_series(location);
    let data;
    if (location === "India") {
      axios
        .get(urls, {
          params: {
            apiName: case_time_series,
            key: "Confirmed,Date,Recovered,Deceased",
          },
        })
        .then((res) => {
          data = res.data.data;
          return dispatch(getChartsData(data, location));
        });
    } else {
      axios
        .get(urls, {
          params: {
            apiName: state_time_series,
            location: location,
          },
        })
        .then((res) => {
          data = res.data;
          return dispatch(getStateChartsData(data, location));
        });
    }
  };
}

// this is auth
