import React, { useState } from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  PopoverHeader,
  UncontrolledPopover,
  PopoverBody,
} from "reactstrap";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signinUser } from "../actions/fetchData.js";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Login from "./Login";
import Vieworder from "./Vieworder.js";
import Myorder from "./Myorder.js";
import Approuter from "./Approuter.js";
import CartList from "./cartList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./itemList.js";
import Popoverr from "./Popover.js";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Redirect } from "react-router-dom";
import Form from "./Form.js";

import Image from "react-bootstrap/Image";

const Navbarr = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(toggle);
  // var auth = localStorage.getItem("auth");
  const loginSchema = Yup.object().shape({
    name: Yup.string().trim().required("Invalid name"),
    email: Yup.string().email().required("Invalid email"),
  });
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema,
  });
  const [isOpen, setIsOpen] = useState(false);

  const navtoggle = () => setIsOpen(!isOpen);
  const onSubmit = ({ name, email }) => {
    dispatch(signinUser({ name, email, setModal }));
  };
  return (
    <>
      <BrowserRouter>
        {/* --new navbar-- */}

        <Navbar light expand="md" className="navcolor">
          <NavbarBrand href="/">
            <img
              src="https://image.freepik.com/free-vector/pizza-logo-vector_25327-119.jpg"
              alt=""
              height="90px"
              width="90px"
              className="logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={navtoggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/" className="menu">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="menu">
                  Menu
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="menu">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="menu">
                  Gallary
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/order" className="menu">
                  Myorder
                </Link>
              </NavItem>
            </Nav>

            <NavbarText className="adminname text-white">
              <Button color="success" onClick={toggle} className="loginbutton">
                Login
              </Button>
            </NavbarText>
          </Collapse>
        </Navbar>

        {/* --new navbar-- */}
        {/*------new banner---------*/}
        <Container fluid={true}>
          <Row className="navmenu">
            <Col className="banlabel" sm="6">
              <h1>Cheesy Pizza</h1>

              <Col className="subtitle">
                Incididunt ut labourdolore megna aliqua.urenim
              </Col>
              <Col className="subtitle">
                add minim vemiam,quis nostrud exercitation
              </Col>
              <Button color="danger" className="moredeal">
                More deals
              </Button>
            </Col>
            {/* ------second col------ */}
            <Col className="bansidebar" sm="6">
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

              <Col className="offer">Special Offer</Col>

              <Col className="pizaa">
                <Carousel interval={1500}>
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
          </Row>
        </Container>
        {/*------new banner---------*/}

        {/* <div> */}
        {/* <div> */}
        {/* <Row className="navbarbaner">
          <Col sm="6"> */}
        {/* <Row sm="6">
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
              <Link to="/order" className="menu">
                Myorder
              </Link>
            </Row> */}
        {/* <div className="content">
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
              <Button color="danger" onClick={toggle} className="loginbutton">
                Login
              </Button> */}
        {/* <Link to="/login">
                  <Button
                    color="danger"
                    onClick={toggle}
                    className="loginbutton"
                  >
                    Login
                  </Button>
                </Link> */}
        {/* </div> */}
        {/* </Col> */}
        {/* <Col sm="6" className="banner2">
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
        {/* <Col className="offer">Special Offer</Col>

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
          </Col> */}
        {/* {auth ? (
              <div>
                 <Redirect to="/"></Redirect> 
                <Switch>
                  <Route path="/success" component={Vieworder} />

                  <Route path="/order" component={Myorder} />

                  <Route path="/cart" component={CartList} />

                  <Route path="/" component={ItemList} />
                </Switch>
              </div>
            ) : (
              <div>
                <Redirect to="/"></Redirect>
              </div>
            )} */}
        <Approuter />
        {/* </Row> */}
        {/* </div> */}
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Login</ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="name"
                ref={register}
                placeholder="Enter Name"
                className="username"
              />
              <br />
              {errors.name && (
                <small className="text-danger">*{errors.name.message}</small>
              )}

              <br />
              <input
                name="email"
                ref={register}
                placeholder="Enter Email"
                className="username"
              />
              <br />
              {errors.email && (
                <small className="text-danger">*{errors.email.message}</small>
              )}

              <br />
              <Button className="loginbut" color="success">
                Login
              </Button>
            </form>
          </ModalBody>
        </Modal>
        {/* </div> */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </>
  );
};

export default Navbarr;
