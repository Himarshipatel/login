import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../actions/fetchData.js";
import { add, subtract, removeItemFromCart } from "../actions/action";
import { Col, Row, Container, Button } from "reactstrap";
import Total from "./total.js";
import Form from "./Form.js";
import { Switch, BrowserRouter, Link, Route } from "react-router-dom";
import Navbar from "./Navbar";

const CartList = () => {
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
    <Container fluid={true}>
      <Col className="orderdesc">
        <h1>Your Order</h1>
      </Col>
      <Col className="yourorder">
        {cart.map((i, j) => (
          <ul key={j}>
            <div className="deskdiv">
              <Row className="ordersrow">
                <Col className="displaydesc" sm="6">
                  <img
                    src={i.image}
                    alt="loading..."
                    width="400px"
                    height="200px"
                  />
                </Col>
                <Col className="diapaydetail">
                  <h3>{i.name}</h3>
                  <p> Ingredient :</p>
                  <p>Ingredient :{i.description}</p>
                  <p>Quantity : {i.quantity}</p>
                  <p>Price : ${i.price}</p>

                  {/* <Row>
                  <Col sm="6">
                    <button onClick={(e) => subtractItem(e, i.id)}>-</button>

                    <button>{i.quantity}</button>

                    <button onClick={(e) => addItem(e, i.id)}>+</button>
                  </Col>

                  <Col>
                    <Button
                      color="danger"
                      onClick={(e) => removeItem(e, i.id, i.price * i.quantity)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row> */}
                </Col>
              </Row>
            </div>
          </ul>
        ))}
      </Col>

      <div className="total">
        <Col>
          {" "}
          <Total />
        </Col>
        <Col>
          {" "}
          <Form />
        </Col>
        <br />
      </div>
    </Container>
  );
};
export default CartList;
