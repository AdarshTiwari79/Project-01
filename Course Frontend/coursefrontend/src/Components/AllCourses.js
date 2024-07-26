import React, { useState, useEffect } from "react";
import Course from "./Course";

const AllCourse = () => {
  useEffect(() => {
    document.title = "All Courses || Adarsh Tiwari";
  }, []);
  const [courses, setCourses] = useState([
    { title: "Java Course", description: "this is demo course" },
    { title: "python Course", description: "this is demo course" },
    { title: "JavaScript Course", description: "this is demo course" },
  ]);

  return (
    <div className="text-center">
      <h1>All Courses</h1>
      <p>List of courses are as follows</p>
      {courses.length > 0
        ? courses.map((course) => <Course course={course}></Course>)
        : "No Courses available"}
    </div>
  );
};

export default AllCourse;
