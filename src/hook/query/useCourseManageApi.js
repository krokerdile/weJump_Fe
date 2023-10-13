import { useMutation, useQuery } from "react-query";
import courseManageApi from "../../api/courses/courseManage";

export function useCreateWeek() {
  return useMutation(courseManageApi.createWeek);
}

export function useReadAllWeek(courseId) {
  const queryKey = ["week", courseId];

  return useQuery(queryKey, () => courseManageApi.readAllWeek({ courseId }), { enabled: !!courseId });
}

export function useUpdateLesson() {
  return useMutation(courseManageApi.updateLesson);
}

export function useDeleteLesson() {
  return useMutation(courseManageApi.deleteLesson);
}

export function useUpdateAssignment() {
  return useMutation(courseManageApi.updateAssignment);
}

export function useDeleteAssignment() {
  return useMutation(courseManageApi.deleteAssignment);
}
