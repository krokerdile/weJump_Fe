import clientApi from "../axios";

const submitApi = {
  // 과제 제출하기
  submitAssignment: async ({ assignmentId, memberId, file }) => {
    return await clientApi.post(`/courses/submits/${assignmentId}/${memberId}`, {
      file,
    });
  },
  // 과제 조회하기
  readAssignment: async ({ assignmentId, memberId }) => {
    return await clientApi.get(`/courses/submits/${assignmentId}/${memberId}`);
  },
  // 과제 전체 조회하기
  readAllAssignment: async ({ assignmentId }) => {
    return await clientApi.get(`/courses/submits/${assignmentId}`);
  },
  delteAssignment: async ({ assignmentId, memberId }) => {
    return await clientApi.delete(`/courses/submits/${assignmentId}/${memberId}`);
  },
  downloadAssignment: async ({ assignmentId, memberId }) => {
    return await clientApi.get(`/courses/submits/${assignmentId}/${memberId}/download`);
  },
};
export default submitApi;
