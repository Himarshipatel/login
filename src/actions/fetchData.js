import React from "react";
import axios from "axios";
//import { browserHistory } from "react-router-dom";
//const API_URL = "http://127.0.0.1:8000/api";
import History from "../history.js";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  // SIGNIN_USER,
  signinUserSuccess,
} from "./action";
const api_token = "null";
export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        dispatch(fetchDataSuccess(response.data.data.products));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
}
export function signinUser({ name, email }) {
  return (dispatch) => {
    // dispatch(SIGNIN_USER());

    axios
      .post(`http://127.0.0.1:8000/api/login`, { name, email })
      .then((response) => {
        dispatch(signinUserSuccess({ name, email }));
        console.log(response);

        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: response.data.user.api_token,
          })
        );

        console.log(api_token);

        History.push("/");
      });
    // .catch((error) => dispatch(onError(error)));
  };
}
