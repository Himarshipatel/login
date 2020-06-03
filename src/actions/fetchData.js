import React from "react";
import axios from "axios";
//import { browserHistory } from "react-router-dom";
//const API_URL = "http://127.0.0.1:8000/api";

import history from "../history.js";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  // SIGNIN_USER,
  signinUserSuccess,
  authError,
} from "./action";

//const api_token = "null";
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
  let token;

  return (dispatch) => {
    // dispatch(SIGNIN_USER());

    axios
      .post("http://127.0.0.1:8000/api/login", { name, email })
      .then((response) => {
        console.log(response);
        dispatch(
          signinUserSuccess(
            response.data.data.user.name,
            response.data.data.user.email
          )
        );
        // console.log(name);
        localStorage.setItem(
          "auth",
          (token = response.data.data.user.api_token)
        );

        console.log(token);

        // history.push("/cart");
      });
    //dispatch(authError(confirm("somting wrong")));
  };
}
