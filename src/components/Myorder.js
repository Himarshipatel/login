import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../actions/fetchData.js";
import { add, subtract, removeItemFromCart } from "../actions/action";
import { Col, Row, Container, Button } from "reactstrap";
import Total from "./total.js";
import Form from "./Form.js";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";

import { Switch, BrowserRouter, Link, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { myOrder } from "../actions/fetchData";

const Myorder = () => {
  const { order } = useSelector((state) => ({
    order: state.products.order,
  }));
  console.log(order);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(myOrder());
  }, [dispatch]);

  return (
    <Container fluid={true}>
      <Col className="orderdesc">
        <h1> My Order</h1>
      </Col>
      <Row>
        <Col className="myorderlist">
          {order
            .slice(0)
            .reverse()
            .map((i, j) => (
              <li key={j} className="listing">
                <Moment format="Do MMM YYYY">{i.created_at}</Moment>
                <br />
                order number:{i.order_number}
                <br />
                Status:{i.status}
                <br />
                Total : {i.subtotal}
                <br />
                Tax:{i.tax}
                <br />
                Delivery Charge: {i.delivery_charge}
                <br />
                Total Charge :
                {(i.subtotal = i.subtotal + i.tax + i.delivery_charge)}
                <br />
                <hr />
                <br />
              </li>
            ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Myorder;
