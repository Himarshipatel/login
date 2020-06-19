import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, add, subtract } from "../actions/action";
import { Button, Card, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import Navbar from "./Navbar";
const ItemList = () => {
  // const item = useSelector((state) => state.products.item);
  //const cart = useSelector((state) => state.products.cart);
  // const total = useSelector((state) => state.products.total);
  const { item } = useSelector((state) => ({
    item: state.products.item,
  }));
  console.log(item);
  const dispatch = useDispatch();

  const addToCartItem = (e, id) => {
    dispatch(addToCart(id));
  };
  console.log(addToCart);
  const addItem = (e, id) => {
    dispatch(add(id));
  };

  const subtractItem = (e, id) => {
    dispatch(subtract(id));
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <br />
        <h3 className="natural">natural Ingredient</h3>
      </div>
      <div>
        <h1 className="menuuu">Menu</h1>
      </div>
      <Row className="carddrow">
        {item.map((i) => (
          <Card key={i.id} className="cardd">
            <Col className="Imagecol">
              <Image
                src={i.image}
                alt="loading..."
                width="200px"
                height="200px"
                className="Image"
                roundedCircle
              />
            </Col>
            <Col>{i.name}</Col>
            <p>Ingredient :</p>
            {i.description}
            <p>Price : ${i.price}</p>

            {!i.quantity ? (
              <Button color="danger" onClick={(e) => addToCartItem(e, i.id)}>
                Add to cart
              </Button>
            ) : (
              <Row>
                <Col sm="4">
                  <Button
                    onClick={(e) => subtractItem(e, i.id)}
                    className="butnum"
                    color="success"
                  >
                    -
                  </Button>
                </Col>
                <Col sm="4">
                  <Button className="butnum" color="success">
                    {i.quantity}
                  </Button>
                </Col>
                <Col sm="4">
                  <Button
                    className="butnum"
                    color="success"
                    onClick={(e) => addItem(e, i.id)}
                  >
                    +
                  </Button>
                </Col>
              </Row>
            )}
          </Card>
        ))}
      </Row>
    </div>
  );

  // const mapStateToProps = (state) => ({
  //   item: state.products.item,
  //   cart: state.products.cart,
  //   total: state.products.total,
  // });
};
export default ItemList;
