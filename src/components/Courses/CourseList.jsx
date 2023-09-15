import React from "react";
import Course from "./Course";
import {Link} from "react-router-dom";

const CourseList = ({ courses }) => {
    return (
        <div>
            {courses.map((course, index) => (
                <Course
                    key={index}
                    imgSrc={course.imgSrc}
                    courseID= {course.courseID}
                    courseName={course.courseName}
                    mentorName={course.mentorName}
                    studentCount={course.studentCount}
                    studentMaxNum={course.studentMaxNum}
                />
            ))}
        </div>
    );
};

export default CourseList;
