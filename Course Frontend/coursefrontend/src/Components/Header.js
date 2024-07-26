import React from "react";
import { Col, Container, Row } from "reactstrap";

function Header() {
  return (
    <div>
      <Container className="py-3 mt-3 bg-warning">
        <Row>
          <Col className="md-12">
            <h1 className="text-center">Welcome to courses application</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
