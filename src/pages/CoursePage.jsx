import React from "react";
import styled from "styled-components";
import CoursePageNav from "../components/Courses/CoursePage/CoursePageNav";
import { useParams } from "react-router-dom";

const EnrolledCourses = [
    {
        imgSrc: "img1.jpg",
        courseID: "1",
        courseName: "Python",
        mentorName: "professor1",
        studentCount: "30",
        studentMaxNum: "50",
    },
    {
        imgSrc: "img2.jpg",
        courseID: "2",
        courseName: "JavaScript",
        mentorName: "professor2",
        studentCount: "40",
        studentMaxNum: "50",
    },
];

const CoursePage = () => {
    const {courseID}=useParams();

    const course = EnrolledCourses.find((course) => course.courseID === courseID);
    return (
      <>
        <div>
            <div className="CourseDetail">
                <img src={course.imgSrc}/>
                <h3 className="CourseName">
                    {course.courseName}
                </h3>
                <div className="CourseMentor">
                    {course.mentorName}
                </div>
                <div className="CourseInfo">

                </div>
            </div>
            <div className="CoursePageMainWrapper">
                <CoursePageNav/>
                <h3>courseID : {courseID}</h3>
            </div>
        </div>
      </>
    );
  };
  
  export default CoursePage;