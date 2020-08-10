import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { addToCart, add, subtract } from "../actions/action";
import { fetchProducts } from "../actions/fetchData";

import { Card, Row, Col, Container } from "reactstrap";
import Image from "react-bootstrap/Image";
//import Navbar from "./Navbar";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

const ItemList = (props) => {
  const { item } = useSelector((state) => ({
    item: state.products.item,
  }));

  const dispatch = useDispatch();

  const addToCartItem = (e, id) => {
    dispatch(addToCart(id));
  };

  const addItem = (e, id) => {
    dispatch(add(id));
  };

  const subtractItem = (e, id) => {
    dispatch(subtract(id));
  };

  return (
    <>
      <div className="itemslist">
        <div>
          <br />
          <h3 className="natural">natural Ingredient</h3>
        </div>
        <div>
          <h1 className="menuuu">Menu</h1>
        </div>
        <Container fluid={true}>
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
                <Col>
                  <b classname="pizzaname">{i.name}</b>
                </Col>
                <p>Ingredient :</p>
                <p>{i.description}</p>
                <p>Price : ${i.price}</p>
                {!i.quantity ? (
                  <Button
                    color="danger"
                    onClick={(e) => addToCartItem(e, i.id)}
                  >
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
        </Container>
      </div>
    </>
  );
};
export default ItemList;
