import { Link } from "react-router-dom";
import styled from "styled-components";

const Course = ({ imgSrc, courseName, mentorName, studentCount, studentMaxNum }) => {
    return (
      <div className="CourseBox">
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
      </div>
    );
};

export default Course;
