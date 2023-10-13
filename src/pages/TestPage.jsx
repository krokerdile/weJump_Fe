import { useReadAllCourses } from "../hook/query/useCourseApi";

const TestPage = () => {
  const { data } = useReadAllCourses();

  // if (!isSuccess) return null;
  const handleTestApi = () => {};
  console.log(data);
  return (
    <>
      <button onClick={handleTestApi}>test button</button>
    </>
  );
};

export default TestPage;
