import clientApi from "../axios";

const coursesApi = {
  // 코스 생성
  createCourse: async ({ course }) => {
    return await clientApi.post("/courses", {
      name: course.name,
      start_date: course.startDate,
      end_date: course.endDate,
      description: course.description,
      summary: course.summary,
      reference: course.reference,
      instructor: course.instructor,
    });
  },
  // 코스 정보 수정
  updateCourse: async ({ course, courseId }) => {
    return await clientApi.post(`/courses/${courseId}`, {
      name: course.name,
      start_date: course.startDate,
      end_date: course.endDate,
      description: course.description,
      summary: course.summary,
      reference: course.reference,
      instructor: course.instructor,
    });
  },
  // 모든 코스 정보 확인
  readAllCourse: async () => {
    return await clientApi.get(`/courses`);
  },
  // 코스 삭제
  deleteCourse: async ({ courseId }) => {
    return await clientApi.post(`/courses/${courseId}`);
  },
  // 해당하는 코스 정보 확인
  readSpecificCourse: async ({ courseId }) => {
    return await clientApi.post(`/courses/${courseId}`);
  },
  // 등록되어져 있는 코스 확인
  checkMyCourses: async () => {
    return await clientApi.post(`/mypage`);
  },
};

export default coursesApi;
