import { Link } from "react-router-dom";
import styled from "styled-components";

const Course = () => {
    return (
      <CourseBox>
        <div className="ImgBox">
            <img>
            
            </img>
        </div>
        <div className="DetailsBox">
            <div className="CourseName">
                Python
            </div>
            <div className="MentorName">
                JDP
            </div>
            <div className="StudentCountBox">
                <img>
                
                </img>
                <div className="StudentCount">
                    50/50
                </div>
            </div>
            
        </div>
      </CourseBox>
    );
};

export default Course;