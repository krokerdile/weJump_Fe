import { useParams } from "react-router-dom";

const ClubDetail = () => {
  const { clubId } = useParams();
  console.log(useParams);
  console.log(clubId);
  return (
    <>
      <div>{clubId}</div>
    </>
  );
};

export default ClubDetail;
