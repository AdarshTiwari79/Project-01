package com.spring.courseserver.courseserver.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.courseserver.courseserver.dao.CourseRepository;
import com.spring.courseserver.courseserver.entities.Course;

@Service
public class CourseServices {

  @Autowired
  private CourseRepository courseRepository;

  // Insert data

  public Course addCourse(Course course) {

    Course course1 = null;
    try {
      course1 = this.courseRepository.save(course);
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("exception in inserting data");
    }
    return course1;
  }

  // Get data

  public Course getCourse(int cId) {

    Course course2 = null;
    try {
      course2 = this.courseRepository.findCourseById(cId);
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("exception in getting data");
    }
    if (course2 == null) {
      return null;
    }
    return course2;
  }

  // Get All Data

  public List<Course> getAllCourses() {
    List<Course> courses = null;
    try {
      courses = (List<Course>) this.courseRepository.findAll();
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("exception in selecting multiple data");
    }
    if (courses == null) {
      return null;
    }
    return courses;
  }

  // Delete data

  public boolean deleteCourse(int courseId) {
    Course course = null;
    try {
      course = this.courseRepository.findCourseById(courseId);
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("exception in deletion");
    }
    if (course == null) {
      return false;
    } else {
      this.courseRepository.delete(course);
      return true;
    }
  }

  // Update data

  public Course updateCourse(Course course, Integer id) {
    course.setId(id);
    Course course1 = null;
    try {
      course1 = this.courseRepository.save(course);
    } catch (Exception e) {
      System.out.println(e);
      System.out.println("exception in updating data");
    }
    return course1;
  }
}
