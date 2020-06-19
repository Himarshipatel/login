import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemList from "../components/itemList.js";
import CartList from "../components/cartList.js";
const Approuter = () => (
  <Router>
    {/* <CartList path="/cart" />
    <ItemList path="/" /> */}
    <Switch>
      <Route path="/" component={ItemList} exact />
      <Route path="/cart" component={CartList} exact />
    </Switch>
  </Router>
);
export default Approuter;
