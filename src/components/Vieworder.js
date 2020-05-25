import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Button } from "reactstrap";
//import CartList from "./cartList";
//import Popover from "./Popover.js";
const Vieworder = () => {
  return (
    <Router>
      <div>
        <Link to="/cart">
          <Button color="danger">View Order</Button>
        </Link>
      </div>
    </Router>
  );
};
export default Vieworder;
