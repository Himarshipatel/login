import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import Navbar from "./Navbar.js";
import Login from "./Login";
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
      {/* <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Protected cmp={Navbar} />
          </Route>
        </Switch> */}
      <Navbar />
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Main;
