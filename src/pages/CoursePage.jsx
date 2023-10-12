import { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Courses/CoursePage/Nav";
import CourseMetarial from "../components/Courses/CoursePage/CourseMaterial";
import Announcements from "../components/Courses/CoursePage/Announcements";
import Syllabus from "../components/Courses/CoursePage/Syllabus";
import ToDo from "../components/Courses/CoursePage/ToDo";
import styled from "styled-components";
import test from "/assets/image/test.png";
import ManageCourse from "../components/Courses/CoursePage/ManageCourse";
import ManageAttendance from "../components/Courses/CoursePage/ManageAttendance";

const EnrolledCourses = [
  {
    imgSrc: test,
    courseID: "1",
    courseName: "Python",
    mentorName: "professor1",
    studentCount: "30",
    studentMaxNum: "50",
  },
  {
    imgSrc: test,
    courseID: "2",
    courseName: "JavaScript",
    mentorName: "professor2",
    studentCount: "40",
    studentMaxNum: "50",
  },
];

const CoursePage = () => {
  const { courseID } = useParams();
  const [selectedNavItem, setSelectedNavItem] = useState("Course Material");

  const course = EnrolledCourses.find((course) => course.courseID === courseID);

  const handleNavbarClick = (text) => {
    setSelectedNavItem(text);
  };

  return (
    <>
      <div>
        <CourseDetail>
          <Banner src={course.imgSrc} />
          <h3 className="CourseName">{course.courseName}</h3>
          <div className="CourseMentor">{course.mentorName}</div>
          <div className="CourseInfo"></div>
        </CourseDetail>
        <div className="CoursePageMainWrapper">
          <Nav onClick={handleNavbarClick} />
          <ContentWrapper>
            <DetailWrapper>
              {selectedNavItem === "Course Material" && <CourseMetarial />}
              {selectedNavItem === "Syllabus" && <Syllabus />}
              {selectedNavItem === "Announcements" && <Announcements />}
              {selectedNavItem === "Manage Course" && <ManageCourse />}
              {selectedNavItem === "Attendance" && <ManageAttendance />}
            </DetailWrapper>
            <ToDo/>
          </ContentWrapper>
        </div>
      </div>
    </>
  );
};

export default CoursePage;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2rem;
`;

const DetailWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const CourseDetail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Banner = styled.img`
  width: 100%;
  height: 20.5rem;
`;
