import styled from "styled-components";

import Outline from "./Outline";
import Textbook from "./Textbook";
import Schedule from "./Schedule";

const SyllabusData = [
  {
    CourseOutline: "This Course has ...",
    TextbookAndOther: "Please write here",
    CourseContent: [
      {
        LearningContent: "What is Python?",
        Assignments: "textbook",
        Notice: "",
      },
    ],
  },
];

const Syllabus = () => {
  return (
    <CoursesWrapper>
      <Outline outline={SyllabusData[0].CourseOutline} />
      <Textbook textbook={SyllabusData[0].TextbookAndOther} />
      <Schedule courseContent={SyllabusData[0].CourseContent} />
    </CoursesWrapper>
  );
};

export default Syllabus;

const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 1rem;
  gap: 1rem;
`;
