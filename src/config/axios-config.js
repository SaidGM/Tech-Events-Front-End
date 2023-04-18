import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
//Adding Axios Response Interceptors
axios.interceptors.response.use(
  function (response) {
    // CODE Executes in HTTP Status 2XX response
    // You Code Is IMPORTANT Here!
    console.log(response);
    return response;
  },
  function (error) {
    // CODE Executes in no HTTP Status 2XX response
    // You Code Is IMPORTANT Here!
    console.log(error.response);
    return Promise.reject(error);
  }
);

export default axios;
