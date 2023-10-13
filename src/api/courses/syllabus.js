import clientApi from "../axios";

const syllabusApi = {
  // syllabus 생성ㅈ
  submitSyllabus: async ({ courseId, week, title, video, assignment }) => {
    return await clientApi.post(`/courses/syllabus/${courseId}`, {
      week,
      title,
      video,
      assignment,
    });
  },
  readAllSyllabus: async ({ courseId }) => {
    return await clientApi.get(`/courses/syllabus/${courseId}`);
  },
  updateSyllabus: async ({ syllabusId, week, title, video, assignment }) => {
    return await clientApi.post(`/courses/syllabus/${syllabusId}`, {
      week,
      title,
      video,
      assignment,
    });
  },
  deleteSyllabus: async ({ syllabusId }) => {
    return await clientApi.delete(`/courses/syllabus/${syllabusId}`);
  },
};
export default syllabusApi;
