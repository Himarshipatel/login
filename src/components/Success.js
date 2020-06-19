import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Vieworder from "./Vieworder.js";
function Success() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/success" component={Vieworder} />
      </div>
    </BrowserRouter>
  );
}

export default Success;
