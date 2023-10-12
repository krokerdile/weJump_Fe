import styled from "styled-components";
import Description from "./Description";
import RequiredMaterials from "./RequiredMaterials";
import CourseOutline from "./CourseOutline";

const SyllabusData = [
  {
    Description: "This course introduces middle school students to the exciting world of programming using the Python language. Students will learn the fundamentals of programming concepts, create interactive programs, and explore various applications of Python.",
    RequiredMaterials: "A computer or laptop with internet access No special software is required; all tools will be provided online",
    CourseOutline: [
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
      <Description outline={SyllabusData[0].Description} />
      <RequiredMaterials textbook={SyllabusData[0].RequiredMaterials} />
      <CourseOutline courseContent={SyllabusData[0].CourseOutline} />
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
