import React, { useState, useEffect } from "react";
import Course from "./Course";
import { getAllCoursesFromServer } from "../api/apiFunctions";

const AllCourse = () => {
  useEffect(() => {
    document.title = "All Courses || Adarsh Tiwari";
  }, []);

  // loading course function
  useEffect(() => {
    getAllCoursesFromServer(courses, setCourses);
  }, []);

  const [courses, setCourses] = useState([]);

  const updateCourses = (id) => {
    return setCourses(courses.filter((course) => course.id != id));
  };

  return (
    <div className="text-center">
      <h1>All Courses</h1>
      <p>List of courses are as follows</p>
      {courses.length > 0
        ? courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              updateCourses={updateCourses}
            ></Course>
          ))
        : "No Courses available"}
    </div>
  );
};

export default AllCourse;
