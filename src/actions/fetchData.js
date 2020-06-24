import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import history from "../history.js";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  signinUserSuccess,
  SigninError,
  authError,
  orderSuccess,
  orderError,
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
  let token;

  return (dispatch) => {
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

        localStorage.setItem(
          "auth",
          (token = response.data.data.user.api_token)
        );

        console.log(token);
      })

      .catch((error) => {
        dispatch(SigninError(error));
      });
  };
}

export function order({
  customer_name,
  customer_email,
  customer_phone,
  customer_address_1,
  customer_address_2,
  customer_address_area,
  customer_address_zip,
  items,
}) {
  console.warn(items);
  const orders = { items: items };
  const tokenn = localStorage.getItem("auth");
  const token = {
    headers: { Authorization: `Bearer ${tokenn}` },
  };
  console.log(token);
  console.log(customer_name);
  console.log(customer_email);
  return (dispatch) => {
    axios
      .post(
        "http://127.0.0.1:8000/api/orders",
        {
          customer_name,
          customer_email,
          customer_phone,
          customer_address_1,
          customer_address_2,
          customer_address_area,
          customer_address_zip,
          items,
        },
        token
      )

      .then((response) => {
        console.log(response);
        dispatch(
          orderSuccess(
            response.data.data.user.customer_name,
            response.data.data.user.customer_email
          )
        );
      })
      .catch((error) => {
        dispatch(orderError(error));
        console.log(error);
      });
  };
}
