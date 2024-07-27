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
import { deleteDataFromServer } from "../api/apiFunctions";

const Course = ({ course, updateCourses }) => {
  // delete button handler
  const deleteHandle = () => {
    deleteDataFromServer(course.id, updateCourses);
  };

  return (
    <Card>
      <CardBody className="text-center">
        <CardSubtitle className="fw-bold">{course.courseName}</CardSubtitle>
        <CardText>{course.courseDesc}</CardText>
        <Container className="">
          <Button onClick={deleteHandle} color="danger me-2">
            Delete
          </Button>
          <Button color="warning">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
