import Axios, { AxiosRequestConfig } from "axios";

export const BasicAuth: AxiosRequestConfig = {
  headers: { "content-type": "application/x-www-form-urlencoded" },
  // data: qs.stringify(data),

  auth: {
    username: process.env.REACT_APP_CLIENT_ID || "dev",
    password: process.env.REACT_APP_CLIENT_SECRET || "dev"
  }
};
