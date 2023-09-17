import styled from "styled-components";
import {Link} from "react-router-dom";
import WeekList from "./weekList";

const WeekData = [
    {
      weekNum: 1,
      video: "Video Title 1",
      assignment: "Assignment Title 1",
      discussion: "Discussion Topic 1",
    },
    {
      weekNum: 2,
      video: "Video Title 2",
      assignment: "Assignment Title 2",
      discussion: "Discussion Topic 2",
    },
];

const CoursePageCourses = () => {
    return (
      <CoursePageCoursesWrapper>
          <WeekList weeks={WeekData}/>
      </CoursePageCoursesWrapper>
    );
  };
  
  export default CoursePageCourses;

  const CoursePageCoursesWrapper = styled.div`
  display: flex;
  width: 90%;
`;
