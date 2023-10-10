import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CoursePageNav = ({ onCourseMaterialClick, onSyllabusClick, onAnnouncementsClick, onManageCourseClick }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("Course Material");
  const [prevNavItem, setPrevNavItem] = useState(null);

  const handleCourseMaterialClick = () => {
    setPrevNavItem(selectedNavItem);
    setSelectedNavItem("Course Material");
    onCourseMaterialClick();
  };

  const handleSyllabusClick = () => {
    setPrevNavItem(selectedNavItem);
    setSelectedNavItem("Syllabus");
    onSyllabusClick();
  };

  const handleAnnouncementsClick = () => {
    setPrevNavItem(selectedNavItem);
    setSelectedNavItem("Announcements");
    onAnnouncementsClick();
  };

  const handleMangeCourseClick = () => {
    setPrevNavItem(selectedNavItem);
    setSelectedNavItem("Manage Course");
    onManageCourseClick();
  };

  return (
    <CoursePageNavWrapper>
      <Link to="#" onClick={handleCourseMaterialClick} className={selectedNavItem === "Course Material" ? "selected" : ""}>
        Course Material
      </Link>
      <Link to="#" onClick={handleSyllabusClick} className={selectedNavItem === "Syllabus" ? "selected" : ""}>
        Syllabus
      </Link>
      <Link to="#" onClick={handleAnnouncementsClick} className={selectedNavItem === "Announcements" ? "selected" : ""}>
        Announcements
      </Link>
      <Link to="#" onClick={handleMangeCourseClick} className={selectedNavItem === "Manage Course" ? "selected" : ""}>
        Manage Course
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
