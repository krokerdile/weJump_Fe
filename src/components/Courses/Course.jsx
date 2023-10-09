import { useNavigate } from "react-router-dom";
import ListCard from "../common/ListCard";

const Course = ({ imgSrc, courseID, courseName, mentorName, studentCount, studentMaxNum }) => {
  const navigate = useNavigate();
  const handleMoveCourse = (url) => {
    navigate(url);
  };
  return (
    <div className="CourseBox">
      <ListCard img={imgSrc} clubName={courseName} onClick={() => handleMoveCourse(`/weJump_Fe/Courses/${courseID}`)}>
        {/* <Link to={`/weJump_Fe/Courses/${courseID}`}> */}
        {/* <div className="ImgBox">
            <img src={imgSrc} alt={courseName} />
          </div> */}
        <div className="DetailsBox">
          <div className="CourseName">{courseName}</div>
          <div className="MentorName">{mentorName}</div>
          <div className="StudentCountBox">
            <div className="StudentCount">
              {studentCount}/{studentMaxNum}
            </div>
          </div>
        </div>
        {/* </Link> */}
      </ListCard>
    </div>
  );
};

export default Course;
