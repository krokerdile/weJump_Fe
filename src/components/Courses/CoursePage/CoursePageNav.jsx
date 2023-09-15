import styled from "styled-components";
import {Link} from "react-router-dom";

const CoursePageNav = () => {
  return (
    <CoursePageNavWrapper>
        <Link>Courses</Link>
        <Link>Syllabus</Link>
        <Link>Notice</Link>
    </CoursePageNavWrapper>
  );
};

export default CoursePageNav;

const CoursePageNavWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
