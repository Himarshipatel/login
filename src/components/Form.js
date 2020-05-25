import React from "react";
import { Col } from "reactstrap";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Col>
      <form onSubmit={handleSubmit(onSubmit)}>
        Name : <input name="customer_name" ref={register} />
        <br />
        Email : <input name="customer_email" ref={register} />
        <br />
        Phone : <input name="customer_phone" ref={register} />
        <br />
        <input type="submit" />
      </form>
    </Col>
  );
};
export default Form;
