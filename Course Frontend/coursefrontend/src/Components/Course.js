import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Course = ({ course }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="">
          <Button color="danger me-2">Delete</Button>
          <Button color="warning">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
