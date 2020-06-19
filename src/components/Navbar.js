// import React from "react";
// import { Col, Row } from "reactstrap";
// const Navbar = () => {
//   return (
//     <div>
//       <Col >hi</Col>
//     </div>
//   );
// };
// export default Navbar;
import React, { useState } from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  PopoverHeader,
  UncontrolledPopover,
  PopoverBody,
  // Popover,
} from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import Login from "./Login";
import Vieworder from "./Vieworder.js";
import Myorder from "./Myorder.js";
import Protected from "./Protected";
//import history from "../history.js";
import CartList from "./cartList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./itemList.js";
import Popoverr from "./Popover.js";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import { Redirect } from "react-router-dom";
import Form from "./Form.js";
//import Total from "./total.js";
import Image from "react-bootstrap/Image";

const Navbar = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  var auth = localStorage.getItem("auth");
  console.log(auth);

  return (
    <BrowserRouter>
      <div>
        <div>
          <Row>
            <Col sm="6">
              <Row sm="6">
                <img
                  src="https://image.shutterstock.com/image-vector/pizzeria-vector-emblem-on-blackboard-600w-635547866.jpg"
                  alt=""
                  height="90px"
                  width="90px"
                  className="logo"
                />

                <Link to="/" className="menu">
                  Home
                </Link>
                <Link to="/" className="menu">
                  Menu
                </Link>
                <Link to="/" className="menu">
                  About
                </Link>
                <Link to="/" className="menu">
                  Gallary
                </Link>
                <Link to="/" className="menu">
                  Contact
                </Link>
              </Row>
              <div className="content">
                <div>Cheesy</div>
                <div>Pizza</div>
                <div className="subtitle">
                  Incididunt ut labourdolore megna aliqua.urenim
                </div>
                <div className="subtitle">
                  add minim vemiam,quis nostrud exercitation
                </div>
                <Button color="danger" className="moredeal">
                  More deals
                </Button>
                <Link to="/login">
                  <Button
                    color="danger"
                    onClick={toggle}
                    className="loginbutton"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </Col>

            <Col sm="6" className="banner2">
              <Col className="cart">
                <Button id="PopoverLegacy" type="button" className="cartbut">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    color="white"
                    className="carticon"
                  />
                </Button>
                <UncontrolledPopover
                  trigger="legacy"
                  placement="bottom"
                  target="PopoverLegacy"
                >
                  <PopoverHeader>Added Item</PopoverHeader>
                  <PopoverBody className="popoverr">
                    <Popoverr />
                    <br />
                    <Link to="/cart">
                      <Button color="danger">Veiw Order</Button>
                    </Link>
                  </PopoverBody>
                </UncontrolledPopover>
              </Col>
              {/* <Col md="6"> */}
              <Col className="offer">Special Offer</Col>

              <Col className="pizaa">
                <Carousel interval={1500}>
                  <Carousel.Item>
                    <Image
                      src="https://pizzacrust.com.pk/admin/uploads/deal/728613f46d32636cf43312df8feddcec.jpeg"
                      alt=""
                      className="bannerimg"
                      roundedCircle
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.dominos.co.in/new_cheese_n_corn.jpg"
                      alt=""
                      roundedCircle
                      className="bannerimg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.dominos.co.in/new_fresh_veggie.jpg"
                      alt=""
                      roundedCircle
                      className="bannerimg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.dominos.co.in/updated_paneer_makhani.jpg"
                      alt=""
                      roundedCircle
                      className="bannerimg"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Col>
            {/* </Col> */}
            {/* <Route path="/success" component={Vieworder} /> */}
            {auth ? (
              <div>
                <Redirect to="/"></Redirect>
                <Switch>
                  <Route path="/success" component={Vieworder} />
                  <Route path="/myorder" component={Myorder} />
                  <Route path="/cart" component={CartList} />

                  <Route path="/" component={ItemList} />
                </Switch>
              </div>
            ) : (
              <div>
                <Redirect to="/login"></Redirect>
              </div>
            )}
            <Switch>
              {/* { */}
              {/* <Route path="/login">
              <Login />
            </Route> */}

              {/* <Route path="/">
              <Protected cmp={ItemList} />
            </Route> */}
            </Switch>
          </Row>
        </div>
        <div className="modal">
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Login</ModalHeader>
            <ModalBody>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </ModalBody>
          </Modal>
        </div>

        {/* <Route path="/myorder" component={Myorder} /> */}
        {/* <Switch>
      //   <Route path="/placeorder" component={Vieworder} />
      // </Switch> */}
        {/* <Route path="/success" component={Vieworder} /> */}
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
