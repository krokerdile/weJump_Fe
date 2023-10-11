import React from "react";
import CourseList from "../components/Courses/CourseList";
import CoursePage from "./CoursePage";
import styled from "styled-components";
import test from "/assets/image/test.png";

const EnrolledCourses = [
  {
    imgSrc: test,
    courseID: "1",
    courseName: "Python",
    mentorName: "professor1",
    studentCount: "30",
    studentMaxNum: "50",
    Registered: "1",
  },
  {
    imgSrc: test,
    courseID: "2",
    courseName: "JavaScript",
    mentorName: "professor2",
    studentCount: "40",
    studentMaxNum: "50",
    Registered: "1",
  },
];

const OngoingCourses = [
  {
    imgSrc: test,
    courseID: "3",
    courseName: "Python",
    mentorName: "professor1",
    studentCount: "30",
    studentMaxNum: "50",
    Registered: "0",
  },
  {
    imgSrc: test,
    courseID: "4",
    courseName: "JavaScript",
    mentorName: "professor2",
    studentCount: "40",
    studentMaxNum: "50",
    Registered: "1",
  },
  {
    imgSrc: test,
    courseID: "5",
    courseName: "Java",
    mentorName: "professor3",
    studentCount: "50",
    studentMaxNum: "50",
    Registered: "1",
  },
];

const PastEnrollment = [
  {
    imgSrc: test,
    courseID: "6",
    courseName: "C++",
    mentorName: "professor1",
    studentCount: "45",
    studentMaxNum: "50",
    Registered: "0",
  },
];

const Courses = () => {
  return (
    <>
      <CourseListWrapper>
        <h3>Enrolled Courses</h3>
        <CourseList courses={EnrolledCourses} />
      </CourseListWrapper>
      <CourseListWrapper>
        <h3>Ongoing Courses</h3>
        <CourseList courses={OngoingCourses} />
      </CourseListWrapper>
      <CourseListWrapper>
        <h3>Past Enrollment</h3>
        <CourseList courses={PastEnrollment} />
      </CourseListWrapper>
    </>
  );
};

export default Courses;

const CourseListWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;
