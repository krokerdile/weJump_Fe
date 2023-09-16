import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CoursePageNav from "../components/Courses/CoursePage/CoursePageNav";
import CoursePageCourses from "../components/Courses/CoursePage/CoursePageCourses";
import CoursePageNotice from "../components/Courses/CoursePage/CoursePageNotice";
import CoursePageSyllabus from "../components/Courses/CoursePage/CoursePageSyllabus";
import ToDo from "../components/Courses/CoursePage/ToDo";

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
    const { courseID } = useParams();
    const [selectedNavItem, setSelectedNavItem] = useState("Course");

    const course = EnrolledCourses.find((course) => course.courseID === courseID);

    const handleCourseClick = () => {
        setSelectedNavItem("Course");
    };

    const handleSyllabusClick = () => {
        setSelectedNavItem("Syllabus");
    };

    const handleNoticeClick = () => {
        setSelectedNavItem("Notice");
    };
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
                <CoursePageNav
                onCourseClick={handleCourseClick}
                onNoticeClick={handleNoticeClick}
                onSyllabusClick={handleCourseClick}
                />
                <div className="DetailWrapper">
                    {selectedNavItem === "Course" && <CoursePageCourses />}
                    {selectedNavItem === "Syllabus" && <CoursePageSyllabus />}
                    {selectedNavItem === "Notice" && <CoursePageNotice />}
                </div>
                <ToDo/>
            </div>
        </div>
      </>
    );
  };
  
  export default CoursePage;