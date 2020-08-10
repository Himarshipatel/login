// import React, { useEffect, useState } from "react";
// import { signinUser } from "../actions/fetchData.js";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { Button } from "reactstrap";
// import * as Yup from "yup";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// const Login = () => {
//   const loginSchema = Yup.object().shape({
//     name: Yup.string().trim().required("invalid name"),
//     email: Yup.string().email("email is invalid").required("invalid email"),
//   });
//   const dispatch = useDispatch();

//   const { register, handleSubmit, errors } = useForm({
//     validationSchema: loginSchema,
//   });

//   const onSubmit = ({ name, email }) => {
//     dispatch(signinUser({ name, email }));
//   };

//   return (
// <form onSubmit={handleSubmit(onSubmit)}>
//   <div className="space">
//     <div>
//       {" "}
//       <label>Name : </label>
//     </div>
//     <div>
//       {" "}
//       <input name="name" ref={register} placeholder="enter your name" />
//     </div>
//     {errors.name && (
//       <small className="text-danger">{errors.name.message}</small>
//     )}
//   </div>
//   <div>
//     <label>Email : </label>
//   </div>
//   <div>
//     {" "}
//     <input name="email" ref={register} placeholder="enter your email" />
//   </div>
//   {errors.email && (
//     <small className="text-danger">{errors.email.message}</small>
//   )}
//   <div className="space">
//     <Button type="submit" className="loginbut" color="success">
//       Login
//     </Button>
//   </div>
// </form>
//   );
// };
// export default Login;
