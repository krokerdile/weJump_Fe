import clientApi from "../axios";

const enrollApi = {
  enrollCourse: async ({ courseId, memberId }) => {
    return await clientApi.post(`/courses/enroll/${courseId}/${memberId}`);
  },
  getCourseEnrollment: async ({ courseId, memberId }) => {
    return await clientApi.get(`/courses/enroll/${courseId}/${memberId}`);
  },
  getAllCourseEnrollment: async ({ courseId }) => {
    return await clientApi.get(`/courses/enroll/${courseId}`);
  },
  acceptEnrollment: async ({ courseId, memberId }) => {
    return await clientApi.put(`/courses/enroll/${courseId}/${memberId}`);
  },
  delete: async ({ courseId, memberId }) => {
    return await clientApi.delete(`/courses/${courseId}/${memberId}`);
  },
};

export default enrollApi;
