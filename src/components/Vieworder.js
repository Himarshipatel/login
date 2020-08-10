import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Col, Row, Container } from "reactstrap";
const Vieworder = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col className="ordersuccess">
          congratulation Your Order Placed Successfully
        </Col>

        {/* <Link to="/">
        <Button color="danger" className="myorder">
          Back
        </Button>
      </Link> */}
      </Row>
    </Container>
  );
};
export default Vieworder;
