import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";

const Course = ({ imgSrc, courseID, courseName, mentorName, studentCount, studentMaxNum }) => {
  const navigate = useNavigate();
  const handleMoveCourse = (url) => {
    navigate(url);
  };
  return (
    <div className="CourseBox">
      <CourseCard img={imgSrc} courseName={courseName} mentorName={mentorName} studentCount={studentCount} studentMaxNum={studentMaxNum} onClick={() => handleMoveCourse(`/weJump_Fe/Courses/${courseID}`)}>
      </CourseCard>
    </div>
  );
};

export default Course;
