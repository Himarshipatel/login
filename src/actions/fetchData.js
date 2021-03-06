import React, { useState } from "react";
import axios from "axios";

import history from "../history.js";
import { toast } from "react-toastify";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  signinUserSuccess,
  SigninError,
  authError,
  myorderrequest,
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

export function signinUser({ name, email, setModal }) {
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
        setModal(false);
        toast.success("Login Successfull", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })

      .catch((error) => {
        dispatch(SigninError(error));
        setModal(true);
        toast.error("Login Failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
  history,
}) {
  console.log(items);
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
        dispatch(orderSuccess(response));
        // toast.success("Order placed successfully", {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        history.push("/success");
      })
      .catch((error) => {
        dispatch(orderError(error));
        toast.error("Order not placed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(error);
      });
  };
}
export function myOrder() {
  const tokenn = localStorage.getItem("auth");
  const token = {
    headers: { Authorization: `Bearer ${tokenn}` },
  };
  console.log(token);
  return (dispatch) => {
    // dispatch(myorderrequest());
    axios
      .get("http://127.0.0.1:8000/api/orders", token)
      .then((response) => {
        console.log(response);
        dispatch(orderSuccess(response.data.data.orders));
      })
      .catch((error) => {
        console.log(error);
        dispatch(orderError(error));
      });
  };
}
