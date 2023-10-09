import React from "react";
import Course from "./Course";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CourseList = ({ courses }) => {
  return (
    <CoursesWrapper>
      {courses.map((course, index) => (
        <Course
          key={index}
          imgSrc={course.imgSrc}
          courseID={course.courseID}
          courseName={course.courseName}
          mentorName={course.mentorName}
          studentCount={course.studentCount}
          studentMaxNum={course.studentMaxNum}
        />
      ))}
    </CoursesWrapper>
  );
};

export default CourseList;

const CoursesWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 1rem;
`;
