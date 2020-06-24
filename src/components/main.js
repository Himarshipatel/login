import React, { useEffect } from "react";
import Approuter from "../router/index.js";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar.js";
import Success from "./Success.js";
import ItemList from "./itemList.js";
import CartList from "./cartList.js";
import Vieworder from "./Vieworder.js";
import Protected from "./Protected";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import { fetchProducts } from "../actions/fetchData";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Main;
