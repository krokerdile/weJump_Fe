import clientApi from "../axios";

const peopleApi = {
  readCheckCourseAssignment: async ({ courseId, memberId }) => {
    return await clientApi.get(`/courses/people/${courseId}/${memberId}`);
  },
  getCourseAssignmentStatus: async ({ courseId }) => {
    return await clientApi.get(`/courses/people/${courseId}`);
  },
  checkAssignmentStatus: async ({ attendance, evaluation, memberId, lessonId, assignmentId }) => {
    return await clientApi.put(`/courses/people/`, {
      attendance,
      evaluation,
      memberId,
      lessonId,
      assignmentId,
    });
  },
};

export default peopleApi;
