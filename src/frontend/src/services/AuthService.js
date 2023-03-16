import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

const register = (firstName, lastName, username, email, password) => {
  return axios.post(API_URL + "register", {
    firstName,
    lastName,
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "authenticate", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log("authenticated " + response.data.token);
      return response.data.token;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getUser,
};
export default AuthService;

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer" + user.accessToken };
  } else {
    return {};
  }
};
