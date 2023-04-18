import axios from "../config/axios-config";

export const serviceApi = () => {
  let baseUrl = "127.0.0.1:8080";
  let url = "/events";
  let urlSignin = "/events/register";
  let urlLogin = "/events/login";
  let urlLike = "/likes";

  const get = async () => {
    const res = await axios.get(url);
    console.log(res);
    return res;
  };

  const create = async (data) => {
    const res = await axios.post(url, data);
    return res;
  };

  const destroy = async (id) => {
    let urlID = `${url}/${id}`;
    const res = await axios.delete(urlID);
    return res;
  };

  const show = async (id) => {
    let urlID = `${url}/${id}`;
    const res = await axios.get(urlID);
    return res;
  };

  const update = async (id, data) => {
    let urlID = `${url}/${id}`;
    const res = await axios.post(urlID, data);
    return res;
  };

  const signin = async (data) => {
    const res = await axios.post(urlSignin, data);
    return res;
  };

  const login = async (data) => {
    const res = await axios.post(urlLogin, data);
    return res;
  };

  const like = async (id) => {
    return await axios.get(urlLike + "/products/" + id);
  };

  const logout = () => {
    //TODO REFACATOR AUTH LOCALSTORAGE
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    localStorage.removeItem("auth_id");
    localStorage.removeItem("auth");

    window.location = "/crud-api-login";
  };

  return {
    get,
    create,
    destroy,
    show,
    update,
    signin,
    login,
    logout,
    like,
    url,
    baseUrl,
  };
};
