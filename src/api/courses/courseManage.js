import clientApi from "../axios";

const courseManageApi = {
  // week 생성
  createWeek: async ({ lesson, courseId }) => {
    return await clientApi.post(`/courses/material/${courseId}`, {
      week: lesson.week,
      start: lesson.start,
      video: lesson.video,
      title: lesson.title,
      description: lesson.description,
      end: lesson.end,
    });
  },
  // 모든 week 읽어 오기
  readAllWeek: async ({ courseId }) => {
    return await clientApi.get(`/courses/material/${courseId}`);
  },
  // lesson 정보 수정하기
  updateLesson: async ({ lessonId, lesson }) => {
    return await clientApi.put(`/courses/lesson/${lessonId}`, {
      week: lesson.week,
      start: lesson.start,
      video: lesson.video,
    });
  },
  // lesson 정보 삭제하기
  deleteLesson: async ({ lessonId }) => {
    return await clientApi.get(`/courses/lesson/${lessonId}`);
  },
  // 과제 수정하기
  updateAssignment: async ({ assingmentId, assignment }) => {
    return await clientApi.put(`/courses/assignment/${assingmentId}`, {
      title: assignment.title,
      description: assignment.description,
      end: assignment.end,
    });
  },
  // 과제 삭제하기
  deleteAssignment: async ({ assingmentId }) => {
    return await clientApi.delete(`/courses/assignment/${assingmentId}`);
  },
};

export default courseManageApi;
