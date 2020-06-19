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
  // const addItem = (e, product_id) => {
  //   dispatch(add(product_id));
  // };
  const subtractItem = (e, id) => {
    dispatch(subtract(id));
  };

  const removeItem = (e, id, amount) => {
    // console.log("amount", amount);
    dispatch(removeItemFromCart(id, amount));
  };
  //console.log(cart);
  // useEffect(() => {
  //   dispatch(order(i));
  // }, [dispatch, i]);

  return (
    <Container>
      <div className="orderdesc">
        <h1>Your Order</h1>
      </div>

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
                <p>{i.description}</p>
                <p>Price : ${i.price}</p>
                {/* <div className="number"> */}
                <Row>
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
                </Row>

                {/* </div> */}
              </Col>
            </Row>
          </div>
        </ul>
      ))}
      <div className="total">
        <Total />
        <Form />
        {/* <BrowserRouter>
          <Switch>
            <Link to="/Form">
              <Button color="success">Confirm Order</Button>
            </Link>
            <Route path="/Form" component={Form} />
          </Switch>
        </BrowserRouter> */}
      </div>
    </Container>
  );
};
export default CartList;
