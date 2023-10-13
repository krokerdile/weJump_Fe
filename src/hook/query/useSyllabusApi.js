import { useMutation, useQuery } from "react-query";
import syllabusApi from "../../api/courses/syllabus";

export function useSubmitSyllabus() {
  return useMutation(syllabusApi.submitSyllabus);
}

export function useReadAllSyllabus(courseId) {
  const queryKey = ["allSyllabuses", courseId];

  return useQuery(queryKey, () => syllabusApi.readAllSyllabus({ courseId }), { enabled: !!courseId });
}

export function useGetAllSyllabus() {
  const { data, isSuccess } = useQuery(["SyllabusList"], syllabusApi.getAll);

  return { data: data, isSuccess };
}

export function useUpdateSyllabus() {
  return useMutation(syllabusApi.updateSyllabus);
}

export function useDeleteSyllabuss() {
  return useMutation(syllabusApi.deleteSyallbus);
}
