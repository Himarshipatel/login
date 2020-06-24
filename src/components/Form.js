import React from "react";
import { Col, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../actions/fetchData.js";

import { Link, BrowserRouter, Switch, Route } from "react-router-dom";

import * as Yup from "yup";
const Form = () => {
  const form = Yup.object().shape({
    customer_name: Yup.string().trim().required("invalid name"),
    customer_email: Yup.string()
      .email("email is invalid")
      .required("invalid email"),
    customer_phone: Yup.string()
      .required("invalid number")
      .max(10, "only 10 digits valid"),
    customer_address_1: Yup.string().required("Address required"),
    customer_address_2: Yup.string().required("Address required"),
    customer_address_2: Yup.string().required("Address required"),
    customer_address_area: Yup.string().required("Area required"),
    customer_address_zip: Yup.string()
      .required("Zip required")
      .max(6, "6 digit only"),
  });
  const { register, handleSubmit, errors } = useForm({
    validationSchema: form,
  });
  const dispatch = useDispatch();

  const { cart, items } = useSelector((state) => ({
    cart: state.products.cart,
    items: state.products.cart,
  }));
  console.log(cart);
  const onSubmit = ({
    customer_name,
    customer_email,
    customer_phone,
    customer_address_1,
    customer_address_2,
    customer_address_area,
    customer_address_zip,
  }) => {
    dispatch(
      order({
        customer_name,
        customer_email,
        customer_phone,
        customer_address_1,
        customer_address_2,
        customer_address_area,
        customer_address_zip,
        items,
      })
    );
  };

  return (
    <div>
      <div className="yourdetails">Your Details</div>
      <Col className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <br />
          Name : <input name="customer_name" ref={register} />
          <br />
          {errors.customer_name && (
            <small className="text-danger">
              {errors.customer_name.message}
            </small>
          )}
          <br />
          Email : <input name="customer_email" ref={register} />
          <br />
          {errors.customer_email && (
            <small className="text-danger">
              {errors.customer_email.message}
            </small>
          )}
          <br />
          Phone : <input name="customer_phone" ref={register} />
          <br />
          {errors.customer_phone && (
            <small className="text-danger">
              {errors.customer_phone.message}
            </small>
          )}
          <br />
          Address : <input name="customer_address_1" ref={register} />
          <br />
          {errors.customer_address_1 && (
            <small className="text-danger">
              {errors.customer_address_1.message}
            </small>
          )}
          <br />
          Address : <input name="customer_address_2" ref={register} />
          <br />
          {errors.customer_address_2 && (
            <small className="text-danger">
              {errors.customer_address_2.message}
            </small>
          )}
          <br />
          Area : <input name="customer_address_area" ref={register} />
          <br />
          {errors.customer_address_area && (
            <small className="text-danger">
              {errors.customer_address_area.message}
            </small>
          )}
          <br />
          Zip : <input name="customer_address_zip" ref={register} />
          <br />
          {errors.customer_address_zip && (
            <small className="text-danger">
              {errors.customer_address_zip.message}
            </small>
          )}
          <br />
          <Link to="/success">
            <Button color="danger" type="submit" className="placeorderbutton">
              Place Order
            </Button>
          </Link>
        </form>
      </Col>
    </div>
  );
};
export default Form;
