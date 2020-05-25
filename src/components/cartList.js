import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, subtract, removeItemFromCart } from "../actions/action";
import { Col, Row, Container, Button } from "reactstrap";
import Total from "./total.js";
import Form from "./Form.js";
import { Switch, BrowserRouter, Link, Route } from "react-router-dom";
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
    // console.log("amount", amount);
    dispatch(removeItemFromCart(id, amount));
  };

  return (
    <Container>
      <div className="orderdesc">
        <h1>Your Order</h1>
      </div>

      {cart.map((i, j) => (
        <ul key={j}>
          <Row>
            <Col className="displaydesc" sm="7">
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
              <p>{i.description}</p>
              <p>Price : {i.price}$</p>
              {/* <div className="number"> */}
              <Row>
                <Col sm="4">
                  <button onClick={(e) => subtractItem(e, i.id)}>-</button>

                  <button>{i.cartCount}</button>

                  <button onClick={(e) => addItem(e, i.id)}>+</button>
                </Col>

                <Col>
                  <Button
                    color="danger"
                    onClick={(e) => removeItem(e, i.id, i.price * i.cartCount)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
              {/* </div> */}
            </Col>
          </Row>
        </ul>
      ))}
      <div className="total">
        <Total />
        <Form />
        <BrowserRouter>
          <Switch>
            <Link to="/Form">
              <Button color="success">Confirm Order</Button>
            </Link>
            <Route path="/Form" component={Form} />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
};
export default CartList;
