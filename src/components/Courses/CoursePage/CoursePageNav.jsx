import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CoursePageNav = ({ onClick }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("Course Material");
  const [prevNavItem, setPrevNavItem] = useState(null);

  const handleNavbarClick = (text) => {
    setPrevNavItem(selectedNavItem);
    setSelectedNavItem(text);
    onClick(text);
  };
  return (
    <CoursePageNavWrapper>
      <Link to="#" onClick={() => handleNavbarClick("Course Material")} className={selectedNavItem === "Course Material" ? "selected" : ""}>
        Course Material
      </Link>
      <Link to="#" onClick={() => handleNavbarClick("Syllabus")} className={selectedNavItem === "Syllabus" ? "selected" : ""}>
        Syllabus
      </Link>
      <Link to="#" onClick={() => handleNavbarClick("Announcements")} className={selectedNavItem === "Announcements" ? "selected" : ""}>
        Announcements
      </Link>
      <Link to="#" onClick={() => handleNavbarClick("Manage Course")} className={selectedNavItem === "Manage Course" ? "selected" : ""}>
        Manage Course
      </Link>
      <Link to="#" onClick={() => handleNavbarClick("Attendance")} className={selectedNavItem === "Attendance" ? "selected" : ""}>
        Attendance
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
