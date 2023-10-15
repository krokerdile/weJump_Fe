import React, { useState } from "react";
import CourseList from "../components/Courses/CourseList";
import styled from "styled-components";
import test from "/assets/image/test.png";
import AddCourseCard from "../components/Courses/CoursePage/AddCourseCard";

const EnrolledCourses = [
  {
    imgSrc: test,
    courseID: "1",
    courseName: "Python",
    mentorName: "professor1",
    studentCount: "30",
    studentMaxNum: "50",
    registered: "1",
  },
  {
    imgSrc: test,
    courseID: "2",
    courseName: "JavaScript",
    mentorName: "professor2",
    studentCount: "40",
    studentMaxNum: "50",
    registered: "1",
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
    registered: "0",
  },
  {
    imgSrc: test,
    courseID: "4",
    courseName: "JavaScript",
    mentorName: "professor2",
    studentCount: "40",
    studentMaxNum: "50",
    registered: "1",
  },
  {
    imgSrc: test,
    courseID: "5",
    courseName: "Java",
    mentorName: "professor3",
    studentCount: "50",
    studentMaxNum: "50",
    registered: "1",
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
    registered: "0",
  },
];

const Courses = () => {
  const [adminCheck, setAdminCheck] = useState(false);

  return (
    <CourseWrapper>
      <h3>Enrolled Courses</h3>
      <CourseListWrapper>
        <CourseList courses={EnrolledCourses} />
        {adminCheck &&<AddCourseCard/>}
      </CourseListWrapper>
      <h3>Ongoing Courses</h3>
      <CourseListWrapper>
        <CourseList courses={OngoingCourses} />
      </CourseListWrapper>
      <h3>Past Enrollment</h3>
      <CourseListWrapper>
        <CourseList courses={PastEnrollment} />
      </CourseListWrapper>
    </CourseWrapper>
  );
};

export default Courses;

const CourseWrapper = styled.div`
  text-align: left;
`;

const CourseListWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
