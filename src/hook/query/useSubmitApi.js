import { useMutation, useQuery } from "react-query";
import submitApi from "../../api/courses/submit";

export function useSubmitAssignment() {
  return useMutation(submitApi.submitAssignment);
}

export function useReadAssignment(assignmentId, memberId) {
  const queryKey = ["readAssignment", assignmentId, memberId];

  return useQuery(queryKey, () => submitApi.readAssignment({ assignmentId, memberId }), { enabled: !!assignmentId && !!memberId });
}

export function useReadAllAssignment(assignmentId) {
  const queryKey = ["readAllAssignments", assignmentId];

  return useQuery(queryKey, () => submitApi.readAllAssignment({ assignmentId }), { enabled: !!assignmentId });
}

export function useDeleteAssignment() {
  return useMutation(submitApi.delteAssignment);
}

export function useDownloadAssingment() {
  return useMutation(submitApi.downloadAssignment);
}
