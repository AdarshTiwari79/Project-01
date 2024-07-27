package com.spring.courseserver.courseserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spring.courseserver.courseserver.entities.Course;
import com.spring.courseserver.courseserver.services.CourseServices;

@RestController
public class MainController {

  @Autowired
  private CourseServices courseServices;

  // Handler for insert operation
  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping("/add")
  public ResponseEntity<Course> saveCourse(@RequestBody Course course) {
    try {
      Course course1 = this.courseServices.addCourse(course);
      if (course1 == null) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
      } else {
        return ResponseEntity.status(HttpStatus.CREATED).body(course1);
      }
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("exception while handling add request");
    }
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }

  // Handler for select operation
  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("/course/{id}")
  public ResponseEntity<Course> getCourse(@PathVariable("id") Integer id) {

    try {
      Course course1 = this.courseServices.getCourse(id);

      if (course1 == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
      } else {
        return ResponseEntity.status(HttpStatus.OK).body(course1);
      }
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("exception while handling select request");
    }
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }

  // Handler for multiple select operation
  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("/courses")
  public ResponseEntity<List<Course>> getMethodName() {
    try {
      List<Course> courses = this.courseServices.getAllCourses();
      if (courses == null) {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
      } else {
        return ResponseEntity.status(HttpStatus.OK).body(courses);
      }
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("exception while handling selectAll request");
    }
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }

  // Handler for Update operation
  @CrossOrigin(origins = "http://localhost:3000")
  @PutMapping("/update/{id}")
  public ResponseEntity<Course> updateCouse(@PathVariable("id") Integer id, @RequestBody Course course) {
    try {
      Course course1 = this.courseServices.updateCourse(course, id);
      if (course1 == null) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
      } else {
        return ResponseEntity.status(HttpStatus.OK).body(course1);
      }
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("exception while handling update request");
    }
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }

  // Handler for delete operation
  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
  public ResponseEntity<String> deleteCourse(@PathVariable("id") Integer cId) {
    try {
      Boolean check = this.courseServices.deleteCourse(cId);
      if (check == true) {
        return ResponseEntity.status(HttpStatus.OK).body("Course Deleted successfully");
      } else {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("try with correct id");
      }
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("exception while handling delete request");
    }
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  }

}
