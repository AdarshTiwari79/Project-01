import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { postDataToServer } from "../api/apiFunctions";

const AddCourse = () => {
  const [course, setCourse] = useState({});

  // handler for input fields
  const handleFields = (event) => {
    let fieldValue = event.target.value;
    let fieldName = event.target.name;
    setCourse((prev) => {
      return { ...prev, [fieldName]: fieldValue };
    });
  };

  // form handler function
  const handleForm = (event) => {
    postDataToServer(course);
    setCourse({});
    event.preventDefault();
  };

  // Clear button handler
  const handleClear = () => {
    setCourse({});
  };

  useEffect(() => {
    document.title = "Add Course || Adarsh Tiwari";
  }, []);

  return (
    <>
      <h1 className="text-center">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="id">Course Id</Label>
          <Input
            id="id"
            name="id"
            value={course.id || ""}
            onChange={handleFields}
            placeholder="Enter Here"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            id="title"
            name="courseName"
            value={course.courseName || ""}
            onChange={handleFields}
            placeholder="Enter Title Here"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            id="description"
            name="courseDesc"
            value={course.courseDesc || ""}
            onChange={handleFields}
            placeholder="Enter Description Here"
            type="textarea"
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success" className="me-2">
            Add Course
          </Button>
          <Button onClick={handleClear} color="danger">
            Clear
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default AddCourse;
