package com.spring.courseserver.courseserver.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Course_details")
public class Course {

  @Id
  @Column(name = "c_Id")
  private int id;
  @Column(name = "c_Name")
  private String courseName;
  @Column(name = "c_Desc")
  private String courseDesc;

  public Course() {
  }

  public Course(int id, String courseName, String courseDesc) {
    this.id = id;
    this.courseName = courseName;
    this.courseDesc = courseDesc;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getCourseName() {
    return courseName;
  }

  public void setCourseName(String courseName) {
    this.courseName = courseName;
  }

  public String getCourseDesc() {
    return courseDesc;
  }

  public void setCourseDesc(String courseDesc) {
    this.courseDesc = courseDesc;
  }

}
