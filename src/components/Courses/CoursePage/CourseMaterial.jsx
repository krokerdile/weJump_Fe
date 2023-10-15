import styled from "styled-components";
import WeekList from "./weekList";

const WeekData = [
  {
    "lessonId": 1,
    "week": 1,
    "start": "2023-09-25",
    "video": "helloworld",
    "assignmentResponseDTO": {
      "assignmentId": 1,
      "title": "learning print",
      "description": "submit until 09-26",
      "end": "2023-09-26"
    },
  },
  {
    "lessonId": 2,
    "week": 2,
    "start": "2023-09-25",
    "video": "helloworld",
    "assignmentResponseDTO": null,
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
