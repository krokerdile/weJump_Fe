import { useState } from "react";
import { useParams } from "react-router-dom";
import CoursePageNav from "../components/Courses/CoursePage/CoursePageNav";
import CoursePageCourseMetarial from "../components/Courses/CoursePage/CoursePageCourseMaterial";
import CoursePageAnnouncements from "../components/Courses/CoursePage/CoursePageAnnouncements";
import CoursePageSyllabus from "../components/Courses/CoursePage/CoursePageSyllabus";
import ToDo from "../components/Courses/CoursePage/ToDo";
import styled from "styled-components";
import test from "/assets/image/test.png";

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

  const handleCourseMaterialClick = () => {
    setSelectedNavItem("Course Material");
  };

  const handleSyllabusClick = () => {
    setSelectedNavItem("Syllabus");
  };

  const handleAnnouncementsClick = () => {
    setSelectedNavItem("Announcements");
  };

  return (
    <>
      <div>
        <div className="CourseDetail">
          <img src={course.imgSrc} />
          <h3 className="CourseName">{course.courseName}</h3>
          <div className="CourseMentor">{course.mentorName}</div>
          <div className="CourseInfo"></div>
        </div>
        <div className="CoursePageMainWrapper">
          <CoursePageNav
            onCourseMaterialClick={handleCourseMaterialClick}
            onSyllabusClick={handleSyllabusClick}
            onAnnouncementsClick={handleAnnouncementsClick}
          />
          <ContentWrapper>
            <DetailWrapper>
              {selectedNavItem === "Course Material" && <CoursePageCourseMetarial />}
              {selectedNavItem === "Syllabus" && <CoursePageSyllabus />}
              {selectedNavItem === "Announcements" && <CoursePageAnnouncements />}
            </DetailWrapper>
            <ToDo />
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
  justify-content: center;
  align-items: center;
`;
