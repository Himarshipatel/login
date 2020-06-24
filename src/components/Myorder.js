import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../actions/fetchData.js";
import { add, subtract, removeItemFromCart } from "../actions/action";
import { Col, Row, Container, Button } from "reactstrap";
import Total from "./total.js";
import Form from "./Form.js";
import { Switch, BrowserRouter, Link, Route } from "react-router-dom";
import Navbar from "./Navbar";
const Myorder = () => {
  const { cart } = useSelector((state) => ({
    cart: state.products.cart,
  }));

  const dispatch = useDispatch();
  const addItem = (e, id) => {
    dispatch(add(id));
  };

  const subtractItem = (e, id) => {
    dispatch(subtract(id));
  };

  const removeItem = (e, id, amount) => {
    dispatch(removeItemFromCart(id, amount));
  };

  return (
    <Container>
      <div className="myordertitle">
        <h1>My Order</h1>
      </div>

      {cart.map((i, j) => (
        <ul key={j}>
          <Row>
            <div className="myorderdesc" sm="6">
              <img
                src={i.image}
                alt="loading..."
                width="400px"
                height="200px"
              />
            </div>
            <div className="myorderdetails" sm="6">
              <h3>{i.name}</h3>
              Quantity : {i.quantity}
            </div>
          </Row>
        </ul>
      ))}
    </Container>
  );
};
export default Myorder;
