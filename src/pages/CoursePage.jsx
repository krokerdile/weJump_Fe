import { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Courses/CoursePage/Nav";
import CourseMetarial from "../components/Courses/CoursePage/CourseMaterial";
import Announcements from "../components/Courses/CoursePage/Announcements";
import Syllabus from "../components/Courses/CoursePage/Syllabus";
import styled from "styled-components";
import test from "/assets/image/test.png";
import ManageCourse from "../components/Courses/CoursePage/ManageCourse";
import ManageAttendance from "../components/Courses/CoursePage/ManageAttendance";
import Join from "../components/Courses/CoursePage/Join";
import ToDo from "../components/Courses/CoursePage/ToDo";

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
  const [loginCheck, setLoginCheck] = useState(false);

  const course = EnrolledCourses.find((course) => course.courseID === courseID);

  const handleNavbarClick = (text) => {
    setSelectedNavItem(text);
  };

  return (
    <>
      <div>
        <CourseDetail>
          <Banner src={course.imgSrc}/>
          <CourseAbout>
            <CourseHeader>
              <CourseName>{course.courseName}</CourseName>
              <CourseMentor>{course.mentorName}</CourseMentor>
            </CourseHeader>
            <CourseInfo>Course information goes here</CourseInfo>
            <CourseInfo>Fridays 10:00 AM - 01:00 PM</CourseInfo>
          </CourseAbout>
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
            {loginCheck ? <ToDo /> : <Join />}
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

const CourseName = styled.div`
  margin-right: 1rem;
  color: ${(props) => props.theme.color["white"]};
  font-size: ${(props) => props.theme.fontSize["headline1"]};
  font-weight: ${(props) => props.theme.fontWeight["headline1"]};
`;

const CourseMentor = styled.div`
  margin-left: 1rem;
  color: ${(props) => props.theme.color["white"]};
  font-size: ${(props) => props.theme.fontSize["category"]};
  font-weight: ${(props) => props.theme.fontWeight["category"]};
`;

const CourseInfo = styled.div`
  color: ${(props) => props.theme.color["white"]};
  font-size: ${(props) => props.theme.fontSize["bodycopy"]};
  font-weight: ${(props) => props.theme.fontWeight["bodycopy"]};
`;

const CourseHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CourseDetail = styled.div`
  position: relative;
`;

const Banner = styled.img`
  width: 100%;
  height: auto;
`;

const CourseAbout = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom : 2rem;
`;