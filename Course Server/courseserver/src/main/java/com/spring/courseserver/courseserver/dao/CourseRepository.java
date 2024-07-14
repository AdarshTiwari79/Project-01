package com.spring.courseserver.courseserver.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spring.courseserver.courseserver.entities.Course;

@Repository
public interface CourseRepository extends CrudRepository<Course, Integer> {

  public Course findCourseById(int courseId);

}
