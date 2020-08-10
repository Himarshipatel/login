import React from "react";
import { Link, BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Vieworder from "./Vieworder.js";
import Myorder from "./Myorder.js";
import CartList from "./cartList.js";
import ItemList from "./itemList.js";
const Approuter = () => {
  const auth = localStorage.getItem("auth");
  console.log("auth");
  return (
    <div>
      {auth ? (
        <div>
          {/* <Redirect to="/"></Redirect> */}
          <Switch>
            <Route path="/success" component={Vieworder} />

            <Route path="/order" component={Myorder} />

            <Route path="/cart" component={CartList} />

            <Route path="/" component={ItemList} />
          </Switch>
        </div>
      ) : (
        <div>
          <Redirect to="/"></Redirect>
        </div>
      )}
    </div>
  );
};

export default Approuter;
