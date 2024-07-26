import React, { useEffect } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course || Adarsh Tiwari";
  }, []);

  return (
    <>
      <h1 className="text-center">Fill Course Details</h1>
      <Form>
        <FormGroup>
          <Label for="id">Course Id</Label>
          <Input id="id" name="userId" placeholder="Enter Here" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter Title Here"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            id="description"
            name="description"
            placeholder="Enter Description Here"
            type="textarea"
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success" className="me-2">
            Add Course
          </Button>
          <Button color="danger">Clear</Button>
        </Container>
      </Form>
    </>
  );
};

export default AddCourse;
