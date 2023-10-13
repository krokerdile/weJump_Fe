import { useMutation, useQuery } from "react-query";
import coursesApi from "../../api/courses/courses";

export function useCreateCourse() {
  return useMutation(coursesApi.createCourse);
}

export function useUpdateCourse() {
  return useMutation(coursesApi.updateCourse);
}

export function useReadAllCourses() {
  return useQuery("courses", () => coursesApi.readAllCourse());
}

export function useDeleteCourse() {
  return useMutation(coursesApi.deleteCourse);
}

export function useReadSpecificCourse(courseId) {
  // 코스 ID를 기반으로 쿼리 키 생성
  const queryKey = ["course", courseId];

  return useQuery(queryKey, () => coursesApi.readSpecificCourse({ courseId }), { enabled: !!courseId }); // 코스 ID가 없으면 자동으로 비활성화됩니다.
}

export function CheckMyCourses() {
  return useMutation(coursesApi.checkMyCourses);
}
