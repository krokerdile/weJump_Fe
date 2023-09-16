import styled from "styled-components";
import {Link} from "react-router-dom";
import WeekList from "./weekList";

const WeekData = [
    {
      WeekNum: 1,
      video: "Video Title 1",
      assignment: "Assignment Title 1",
      discussion: "Discussion Topic 1",
    },
    {
      WeekNum: 2,
      video: "Video Title 2",
      assignment: "Assignment Title 2",
      discussion: "Discussion Topic 2",
    },
];

const CoursePageSyllabus = () => {
    return (
      <CoursePageCoursesWrapper>
          <WeekList courses={WeekData}/>
      </CoursePageCoursesWrapper>
    );
  };
  
  export default CoursePageSyllabus;

  const CoursePageCoursesWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
