import { Link } from "react-router-dom";
import styled from "styled-components";

const Course = ({ imgSrc, courseID, courseName, mentorName, studentCount, studentMaxNum }) => {
    return (
      <div className="CourseBox">
        <Link to={`/weJump_Fe/Courses/${courseID}`}>
            <div className="ImgBox">
                <img src={imgSrc} alt={courseName} />
            </div>
            <div className="DetailsBox">
                <div className="CourseName">
                    {courseName}
                </div>
                <div className="MentorName">
                    {mentorName}
                </div>
                <div className="StudentCountBox">
                    <div className="StudentCount">
                        {studentCount}/{studentMaxNum}
                    </div>
                </div>
            </div>
        </Link>
      </div>
    );
};

export default Course;
