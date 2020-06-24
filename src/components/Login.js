import React, { useEffect } from "react";
import { signinUser } from "../actions/fetchData.js";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import * as Yup from "yup";

const Login = () => {
  const loginSchema = Yup.object().shape({
    name: Yup.string().trim().required("invalid name"),
    email: Yup.string().email("email is invalid").required("invalid email"),
  });
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema,
  });

  const onSubmit = ({ name, email }) => {
    dispatch(signinUser({ name, email }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <b>Name : </b>
      <input name="name" ref={register} placeholder="enter your name" />
      <br />
      {errors.name && (
        <small className="text-danger">{errors.name.message}</small>
      )}
      <br />
      <br />
      <b>Email : </b>{" "}
      <input name="email" ref={register} placeholder="enter your email" />
      <br />
      {errors.email && (
        <small className="text-danger">{errors.email.message}</small>
      )}
      <br />
      <br />
      <Button type="submit" className="loginbut" color="success">
        Login
      </Button>
    </form>
  );
};
export default Login;
