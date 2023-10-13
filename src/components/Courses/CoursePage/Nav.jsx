import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ onClick, registeredCheck }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("Syllabus");
  const [prevNavItem, setPrevNavItem] = useState(null);
  const [adminCheck, setAdminCheck] = useState(true);

  const handleNavbarClick = (text) => {
    setPrevNavItem(selectedNavItem);
    setSelectedNavItem(text);
    onClick(text);
  };
  return (
    <NavWrapper>
      {registeredCheck && (
        <Link to="#" onClick={() => handleNavbarClick("Course Material")} className={selectedNavItem === "Course Material" ? "selected" : ""}>
          Course Material
        </Link>
      )}
      <Link to="#" onClick={() => handleNavbarClick("Syllabus")} className={selectedNavItem === "Syllabus" ? "selected" : ""}>
        Syllabus
      </Link>
      {registeredCheck && (
        <Link to="#" onClick={() => handleNavbarClick("Announcements")} className={selectedNavItem === "Announcements" ? "selected" : ""}>
          Announcements
        </Link>
      )}
      {adminCheck && (
        <>
          <Link to="#" onClick={() => handleNavbarClick("Manage Course")} className={selectedNavItem === "Manage Course" ? "selected" : ""}>
            Manage Course
          </Link>
          <Link to="#" onClick={() => handleNavbarClick("Attendance")} className={selectedNavItem === "Attendance" ? "selected" : ""}>
            Attendance
          </Link>
        </>
      )}
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  font-size: ${(props) => props.theme.fontSize["category"]};
  font-weight: ${(props) => props.theme.fontWeight["category"]};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color["black"]};
    transition: color 0.3s ease-in-out;

    &.selected {
      font-weight: bold;
      color: ${(props) => props.theme.color["undecided"]};
    }

    &:hover {
      color: ${(props) => props.theme.color["undecided"]};
    }
  }
`;
