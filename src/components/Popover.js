import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, subtract, removeItemFromCart } from "../actions/action";
import { Row, Col, Button } from "reactstrap";
import Image from "react-bootstrap/Image";
const Popoverr = () => {
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
    <div>
      {cart.map((i, j) => (
        <div key={i.id}>
          <Image
            src={i.image}
            alt="loading..."
            width="200px"
            height="200px"
            className="Image"
            roundedCircle
          />

          <h3>{i.name}</h3>
          <p>Ingredient :</p>
          <Col className="popdesc">{i.description}</Col>
          <p>Price : {i.price}$</p>
          {/* <div className="number"> */}
          <Row>
            <Col sm="5">
              <button onClick={(e) => subtractItem(e, i.id)}>-</button>
              <button>{i.cartCount}</button>
              <button onClick={(e) => addItem(e, i.id)}>+</button>
            </Col>
            <br />
            <Col sm="4">
              <Button
                color="danger"
                onClick={(e) => removeItem(e, i.id, i.price * i.cartCount)}
              >
                Remove
              </Button>
            </Col>
          </Row>
          {/* </div> */}
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Popoverr;
