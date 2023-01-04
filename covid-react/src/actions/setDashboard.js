import axios from "axios";
import { ApiUrls } from "../helpers/Api";
import {
  toggleDashboardDisplay,
  getTweetData,
  getHospitalList,
  getOxyList,
  setDashboardLocation,
} from "./index";

export function setDisplayDashboard(display) {
  // console.log(display);
  return {
    data: display,
    type: toggleDashboardDisplay,
  };
}

export function setTweetData(data) {
  return {
    data: data,
    type: getTweetData,
  };
}

export function setHospitalList(data) {
  return {
    data: data,
    type: getHospitalList,
  };
}

export function getTweeterData(location) {
  return function (dispatch) {
    let urls = ApiUrls.get_tweet_data();
    // location = location.split(" ")[0];
    let data;
    if (location === undefined) {
      location = "Delhi";
    }
    axios
      .get(urls, {
        params: { location: location },
      })
      .then((res) => {
        if (res) {
          data = res.data;
          return dispatch(setTweetData(data));
        }
      });
  };
}

export function getDataHospitalList(location) {
  return function (dispatch) {
    let urls = ApiUrls.get_hopital_list();
    if (location === undefined) {
      location = "Delhi (NCT)";
    }
    axios
      .get(urls, {
        params: { location: location },
      })
      .then((res) => {
        if (res) {
          return dispatch(setHospitalList(res.data.data));
        }
        // console.log(res.data.data);
      });
  };
}

export function setOxyList(data) {
  return {
    data: data,
    type: getOxyList,
  };
}
export function getOxyListData(location) {
  return function (dispatch) {
    let urls = ApiUrls.get_oxy_list();
    if (location === undefined) {
      location = "Delhi (NCT)";
    }
    axios
      .get(urls, {
        params: { location: location },
      })
      .then((res) => {
        // console.log(res.data.data, "*******");
        return dispatch(setOxyList(res.data.data));
      });
  };
}

export function setDashboardLocationFunction(location) {
  return {
    type: setDashboardLocation,
    data: location,
  };
}

// this is auth
