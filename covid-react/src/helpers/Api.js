const API_ROOT = "http://projcovi.com";
function locationsMapedToApi(location) {
  if (location === "India") return `${API_ROOT}/getIndiaSeriesData`;
  else return `${API_ROOT}/getStateSeriesData`;
}
export const ApiUrls = {
  state_wise: () => `${API_ROOT}/states`,
  case_time_series: (location) => locationsMapedToApi(location),
  district_time_series: () => `${API_ROOT}/getDistrictData`,
  selected_state_base_num: () => `${API_ROOT}/getState`,
  get_tweet_data: () => `${API_ROOT}/getTweets`,
  get_hopital_list: () => `${API_ROOT}/getHospitalList`,
  get_oxy_list: () => `${API_ROOT}/getOxyList`,
  auth: () => `${API_ROOT}/signIn`,
  signUp: () => `${API_ROOT}/signUp`,
  profile: () => `${API_ROOT}/profile`,
};

export function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//this is storage
