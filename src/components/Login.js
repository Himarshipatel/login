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

import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log("Submit event", e);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register} />
      <input name="email" ref={register} />
      <button type="submit">Submit</button>
    </form>
  );
}
