import React from "react";
import axios from "axios";
//import { browserHistory } from "react-router";
//const API_URL = "http://127.0.0.1:8000/api";

import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  // SIGNIN_USER,
  signinUserSuccess,
} from "./action";

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
        dispatch(signinUserSuccess(response.data.content.username));
        console.log(response);
        // - Save the JWT token
        localStorage.setItem("auth", response.data.user.api_token);
        // - redirect to the route '/dashboard'
        // browserHistory.push("/");
      });
    // .catch((error) => dispatch(onError(error)));
  };
}
