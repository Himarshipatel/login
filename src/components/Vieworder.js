import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from "reactstrap";

const Vieworder = () => {
  return (
    <div>
      <div className="ordersuccess">congratulation Your Order Placed</div>

      <Link to="/myorder">
        <Button color="danger" className="myorder">
          My Order
        </Button>
      </Link>
    </div>
  );
};
export default Vieworder;
