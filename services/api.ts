import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { userAgent } from "next/server";
import { getToken } from "../utils/localStorage";

//axios.post(url, body, method, header)

export const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

const header = {
  "Content-Type": "application/json",
  Authorization: "",
};
const parameters = {
  method: "GET",
  headers: header,
};

//get token
api.interceptors.request.use(
  (config: any) => {
    const user = getToken();
    if (!user) {
      return config;
    }
    if (config.headers) {
      config.headers.Authorization = `Bearer ${user.token}`;
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Refresh token

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     if (error.response?.status === 401) {
//       if (error.response?.data?.code === "token.expired") {
//         //const user = getToken()

//         api.post("/refreshtoken", { refreshToken: user.refreshToken }).then((response) => {
//           //setCookie(undefined, "user.token", response.data.token, {maxAge: 60*60*24*30, path: '/'})
//           //setCookie(undefined, "user.token", response.data.refreshToken, {maxAge: 60*60*24*30, path: '/'})
//           api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
//         });
//       } else {
//       }
//     }
//   }
// );
