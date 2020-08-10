import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import Navbarr from "./Navbar.js";
//import { ToastContainer } from "react-toastify";
import ItemList from "./itemList.js";
import CartList from "./cartList.js";
import Vieworder from "./Vieworder.js";

import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import { fetchProducts } from "../actions/fetchData";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbarr />
    </div>
  );
};

export default Main;
