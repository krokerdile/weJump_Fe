import { useMutation, useQuery } from "react-query";
import announcementApi from "../../api/announcement/announcement";

export function useCreateAnnouncement() {
  return useMutation(announcementApi.createAnnouncement());
}

export function useReadAnnouncement(courseId) {
  const queryKey = ["announcement", courseId];

  return useQuery(queryKey, () => announcementApi.readAnnouncement({ courseId }), { enabled: !!courseId });
}

export function useReadSpecificAnnouncement(courseId, announcementId) {
  // 코스 ID와 공지사항 ID를 기반으로 쿼리 키 생성
  const queryKey = ["announcement", courseId, announcementId];

  return useQuery(queryKey, () => announcementApi.readSpecificAnnouncement({ courseId, announcementId }), {
    enabled: !!courseId && !!announcementId,
  });
}

export function useUpdateAnnouncement() {
  return useMutation(announcementApi.updateAnnouncement);
}

export function useDeleteAnnouncement() {
  return useMutation(announcementApi.delteAnnouncement);
}
