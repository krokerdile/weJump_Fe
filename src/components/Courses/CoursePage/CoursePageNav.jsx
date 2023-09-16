import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CoursePageNav = ({ onCourseClick, onSyllabusClick, onNoticeClick }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("Course");
  const [prevNavItem, setPrevNavItem] = useState(null);

  const handleCourseClick = () => {
    setPrevNavItem(selectedNavItem);
    setSelectedNavItem("Course");
    onCourseClick();
  };

  const handleSyllabusClick = () => {
    setPrevNavItem(selectedNavItem);
    setSelectedNavItem("Syllabus");
    onSyllabusClick();
  };

  const handleNoticeClick = () => {
    setPrevNavItem(selectedNavItem);
    setSelectedNavItem("Notice");
    onNoticeClick();
  };

  return (
    <CoursePageNavWrapper>
      <Link to="#" onClick={handleCourseClick} className={selectedNavItem === "Course" ? "selected" : ""}>
        Course
      </Link>
      <Link to="#" onClick={handleSyllabusClick} className={selectedNavItem === "Syllabus" ? "selected" : ""}>
        Syllabus
      </Link>
      <Link to="#" onClick={handleNoticeClick} className={selectedNavItem === "Notice" ? "selected" : ""}>
        Notice
      </Link>
    </CoursePageNavWrapper>
  );
};

export default CoursePageNav;

const CoursePageNavWrapper = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease-in-out;

    &.selected {
      font-weight: bold;
      color: #007bff;
    }

    &:hover {
      color: #007bff;
    }
  }
`;
