import { useMutation, useQuery } from "react-query";
import enrollApi from "../../api/courses/enroll";

export function useEnrollCourse() {
  return useMutation(enrollApi.enrollCourse);
}

export function useGetCourseEnrollment(courseId, memberId) {
  const queryKey = ["enrollment", courseId, memberId];

  return useQuery(queryKey, () => enrollApi.getCourseEnrollment({ courseId, memberId }), { enabled: !!courseId && !!memberId });
}

export function useGetAllCourseEnrollment(courseId) {
  const queryKey = ["allEnrollment", courseId];

  return useQuery(queryKey, () => enrollApi.getAllCourseEnrollment({ courseId }), { enabled: !!courseId });
}

export function useAcceptEnrollment() {
  return useMutation(enrollApi.acceptEnrollment);
}

export function useDelete() {
  return useMutation(enrollApi.delete);
}
