import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CoursePageNav = ({ onCourseClick, onSyllabusClick, onNoticeClick }) => {
  return (
    <CoursePageNavWrapper>
      <Link to="#" onClick={onCourseClick}>Course</Link>
      <Link to="#" onClick={onSyllabusClick}>Syllabus</Link>
      <Link to="#" onClick={onNoticeClick}>Notice</Link>
    </CoursePageNavWrapper>
  );
};

export default CoursePageNav;

const CoursePageNavWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;