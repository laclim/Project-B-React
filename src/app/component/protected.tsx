import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { stringify } from "querystring";

function Protected() {
  const [result, setResult] = useState("");
  axios
    .get("/restricted")
    .then(res => {
      setResult(res.data);
    })
    .catch(err => {
      //   setResult(err);
    });
  // axios.interceptors.response.use(
  //   response => response,
  //   async error => {
  //     if (error.message == "token expired") {
  //       console.log("expired");
  //       return Promise.reject(error);
  //     }
  //     const response = await axios.post(
  //       "/refresh",
  //       stringify({ refresh_token: localStorage.getItem("refreshToken") })
  //     );
  //   }
  // );
  return <div>{result}</div>;
}

export default Protected;
