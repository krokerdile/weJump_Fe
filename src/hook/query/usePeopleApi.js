import { useMutation, useQuery } from "react-query";
import peopleApi from "../../api/courses/people";

export function useReadCheckCourseAssignment(courseId, memberId) {
  const queryKey = ["checkCourseAssignment", courseId, memberId];

  return useQuery(queryKey, () => peopleApi.readCheckCourseAssignment({ courseId, memberId }), { enabled: !!courseId && !!memberId });
}

export function useGetCourseAssignmentStatus(courseId) {
  const queryKey = ["courseAssignmentStatus", courseId];

  return useQuery(queryKey, () => peopleApi.getCourseAssignmentStatus({ courseId }), { enabled: !!courseId });
}

export function useCheckAssignmentStatus() {
  return useMutation(peopleApi.checkAssignmentStatus);
}
