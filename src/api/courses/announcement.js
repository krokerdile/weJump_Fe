import clientApi from "../axios";

const announcementApi = {
  createAnnouncement: async ({ courseId }) => {
    return await clientApi.get(`/courses/${courseId}/announcement`);
  },
  readAnnouncement: async ({ courseId }) => {
    return await clientApi.get(`/courses/${courseId}/announcement`);
  },
  readSpecificAnnouncement: async ({ courseId, announcementId }) => {
    return await clientApi.get(`/courses/${courseId}/announcement/${announcementId}`);
  },
  updateAnnouncement: async ({ courseId, announcementId, title, content }) => {
    return await clientApi.patch(`/courses/${courseId}/announcement/${announcementId}`, {
      title,
      content,
    });
  },
  delteAnnouncement: async ({ courseId, announcementId }) => {
    return await clientApi.delete(`/courses/${courseId}/announcement/${announcementId}`);
  },
};

export default announcementApi;
