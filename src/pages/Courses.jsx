import React from "react";
import CourseList from "../components/Courses/CourseList";

const EnrolledCourses = [
  {
      imgSrc: "img1.jpg",
      courseName: "Python",
      mentorName: "professor1",
      studentCount: "30",
      studentMaxNum: "50",
  },
  {
      imgSrc: "img2.jpg",
      courseName: "JavaScript",
      mentorName: "professor2",
      studentCount: "40",
      studentMaxNum: "50",
  },
];

const OngoingCourses = [
  {
      imgSrc: "img1.jpg",
      courseName: "Python",
      mentorName: "professor1",
      studentCount: "30",
      studentMaxNum: "50",
  },
  {
      imgSrc: "img2.jpg",
      courseName: "JavaScript",
      mentorName: "professor2",
      studentCount: "40",
      studentMaxNum: "50",
  },
  {
    imgSrc: "img3.jpg",
    courseName: "Java",
    mentorName: "professor3",
    studentCount: "50",
    studentMaxNum: "50",
  },
];

const PastEnrollment = [
  {
      imgSrc: "img1.jpg",
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
