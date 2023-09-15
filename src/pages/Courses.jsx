import React from "react";
import CourseList from "../components/Courses/CourseList";
import CoursePage from "./CoursePage";

const EnrolledCourses = [
  {
      imgSrc: "img1.jpg",
      courseID: "1",
      courseName: "Python",
      mentorName: "professor1",
      studentCount: "30",
      studentMaxNum: "50",
  },
  {
      imgSrc: "img2.jpg",
      courseID: "2",
      courseName: "JavaScript",
      mentorName: "professor2",
      studentCount: "40",
      studentMaxNum: "50",
  },
];

const OngoingCourses = [
  {
      imgSrc: "img1.jpg",
      courseID: "3",
      courseName: "Python",
      mentorName: "professor1",
      studentCount: "30",
      studentMaxNum: "50",
  },
  {
      imgSrc: "img2.jpg",
      courseID: "4",
      courseName: "JavaScript",
      mentorName: "professor2",
      studentCount: "40",
      studentMaxNum: "50",
  },
  {
    imgSrc: "img3.jpg",
    courseID: "5",
    courseName: "Java",
    mentorName: "professor3",
    studentCount: "50",
    studentMaxNum: "50",
  },
];

const PastEnrollment = [
  {
      imgSrc: "img1.jpg",
      courseID: "6",
      courseName: "C++",
      mentorName: "professor1",
      studentCount: "45",
      studentMaxNum: "50",
  },
];

const Courses = () => {
  return (
    <>
      <div className="EnrolledCoursesWrapper">
        <h3>Enrolled Courses</h3>
          <CourseList courses={EnrolledCourses}/>
      </div>
      <div className="OngoingCoursesWrapper">
        <h3>Ongoing Courses</h3>
          <CourseList courses={OngoingCourses}/>
      </div>
      <div className="PastEnrollment">
        <h3>Past Enrollment</h3>
          <CourseList courses={PastEnrollment}/>
      </div>
    </>
  );
};

export default Courses;
