import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
const Home = () => {
  useEffect(() => {
    document.title = "Home || Adarsh Tiwari";
  }, []);

  return (
    <div className="bg-secondary py-4 px-2">
      <Container className="mt-4 text-center">
        <Row>
          <Col>
            <h1>Courses By Adarsh Tiwari</h1>
            <p className="lead">
              These are collection of courses available by Adarsh Sir, you can
              purchase and study it.
            </p>
            <Container className="text-center">
              <Button color="primary" className="px-5 mt-2">
                Start
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
