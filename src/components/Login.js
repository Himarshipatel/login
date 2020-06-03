// import React, { Component } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// //import signinUserSuccess from "../actions";
// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: null,
//       email: null,
//       login: false,
//       token: null,
//     };
//   }
//   //   login() {
//   //     fetch("http://127.0.0.1:8000/api/login", {
//   //       method: "POST",
//   //       headers: {
//   //         Accept: "application/json",
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(this.state),
//   //     }).then((resp) => {
//   //       resp.json().then((result) => {
//   //         console.warn("result", result);
//   //         localStorage.setItem(
//   //           "auth",
//   //           JSON.stringify({
//   //             login: true,
//   //             token: result.data.user.api_token,
//   //           })
//   //         );
//   //       });
//   //     });
//   //   }
//   login({ name, email }) {
//     this.props.signinUser({ name, email });
//   }
//   render() {
//     return (
//       <>
//         <div>
//           <b>Name : </b>
//           <input
//             placeholder="enter your name"
//             type="text"
//             onChange={(e) => {
//               this.setState({ name: e.target.value });
//             }}
//           />
//           <br />
//           <br />

//           <b>E-mail : </b>

//           <input
//             placeholder="enter your email"
//             type="text"
//             onChange={(e) => {
//               this.setState({ email: e.target.value });
//             }}
//           />
//           <br />
//           <br />

//           <Button
//             color="success"
//             onClick={() => this.login()}
//             className="loginbut"
//           >
//             Login
//           </Button>
//         </div>
//       </>
//     );
//   }
// }
// export default Login;

import React, { useEffect } from "react";
import { signinUser } from "../actions/fetchData.js";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import * as Yup from "yup";
// const { authenticated } = useSelector((state) => ({
//   authenticated: state.products.authenticated,
// }));

// useEffect(() => {
//   dispatch(signinUser({ name, email }));
// }, [dispatch, name, email]);

const Login = () => {
  const loginSchema = Yup.object().shape({
    name: Yup.string().trim().required("invalid name"),
    email: Yup.string().email("email is invalid").required("invalid email"),
  });
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema,
  });
  // const onSubmit = (name, e) => {
  //   // dispatch(signinUser({ name }));
  // };
  //   const { authenticated } = useSelector((state) => ({
  //   authenticated: state.products.authenticated,
  // }));

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
