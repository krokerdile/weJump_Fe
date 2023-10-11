import styled from "styled-components";
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

const CourseMaterial = () => {
  return (
    <CoursesWrapper>
      <WeekList weeks={WeekData} />
    </CoursesWrapper>
  );
};

export default CourseMaterial;

const CoursesWrapper = styled.div`
  display: flex;
  width: 100%;
`;
