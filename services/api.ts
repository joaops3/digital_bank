import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
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

// let isRefreshing = false
// let FailerdRequestsQueue: any = []
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     if (error.response?.status === 401) {
//       if (error.response?.data.code === "token.expired") {
//         //const user = getToken()
//         const originalConfig = error.config
//             if(!isRefreshing){
//               isRefreshing = true
//                       api.post("/refreshtoken", { refreshToken: user.refreshToken }).then((response) => {
//                         setCookie(undefined, "user.token", response.data.token, {maxAge: 60*60*24*30, path: '/'})
//                         setCookie(undefined, "user.token", response.data.refreshToken, {maxAge: 60*60*24*30, path: '/'})
//                         api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
//                         FailerdRequestsQueue.forEach(request => request.onSucess(token))
//                         FailerdRequestsQueue = []
//                       }).catch(error => {
//                           FailerdRequestsQueue.forEach((request) => request.onError(error));
//                              FailerdRequestsQueue = [];
//                       }).finally(() => {isRefreshing = false})
//             }
//             return new Promise((resolve, reject) => {
//               FailerdRequestsQueue.push({
//                 onSucess: (token: string) => {
//                   if(!originalConfig){ reject()}

//                   originalConfig?.headers["Authorization"] = `Bearer ${token}`
//                   resolve(api(originalConfig))
//                 },
//                 onError: (error: AxiosError) => {
//                   reject(error)
//                 }
//               })
//             })
//       } else {
//            if (error.response?.status === 401) {
//             destroyCookies()
//             Router.push("/")
//            }
//            return Promise.reject(error)
//       }
//     }
//   }
// );
